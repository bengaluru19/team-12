import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SingleEventReviews from './SingleEventReviews';
import firebase from './../../Firebase';


function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}


const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
}));

export default function ReviewRequests() {
	const classes = useStyles();
    const [value, setValue] = useState(0);
    const [eventData, setEventData] = useState({});

	function handleChange(event, newValue) {
		setValue(newValue);
    }
    useEffect(()=> {
        let ref = firebase.database().ref();
        let child = ref.child("user1");
        child.on("value", snap => {
            let snapshot = snap.val();
            let eventData = {};
            Object.values(snapshot).forEach((event,i) => {
                if(eventData[event.eventname]){ eventData[event.eventname].push({name: event.username,skills: event.skills}) }
                else  eventData[event.eventname] = [{ name: event.username, skills : event.skills}];
            })
            setEventData(eventData);
        });
    }, [])
	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
				>
                    {
                        Object.keys(eventData).map((event, i) => {
                            return <Tab key={event} label={event} />
                        })
                    }
				</Tabs>
			</AppBar>
            {
                Object.values(eventData).map((eventData, i) => {
                    if(i === value){
                        return <SingleEventReviews usersData={eventData} />
                    }
                })
            }
		</div>
	);
}