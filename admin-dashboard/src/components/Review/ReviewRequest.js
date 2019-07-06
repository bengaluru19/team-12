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
	const [value, setValue] = React.useState(0);

	function handleChange(event, newValue) {
		setValue(newValue);
    }
    useEffect(()=> {
        let ref = firebase.database().ref();
        let child = ref.child("user1");
        child.on("value", snapshot => {
            console.log(snapshot.val());
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
				<Tab label="Event One" />
				<Tab label="Event Two" />
				<Tab label="Event Three" />
				<Tab label="Event Four" />
				<Tab label="Event Five" />
				</Tabs>
			</AppBar>
			{value === 0 && <SingleEventReviews />}
			{value === 1 && <TabContainer>Item Two</TabContainer>}
			{value === 2 && <TabContainer>Item Three</TabContainer>}
			{value === 3 && <TabContainer>Item Four</TabContainer>}
			{value === 4 && <TabContainer>Item Five</TabContainer>}
			{value === 5 && <TabContainer>Item Six</TabContainer>}
			{value === 6 && <TabContainer>Item Seven</TabContainer>}
		</div>
	);
}