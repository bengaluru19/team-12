import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import VolunteerReport from './VolunteerReport';
import firebase from './../../Firebase';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
}));
function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
  }

export default function EventReport() {
    const classes = useStyles();
    const theme = useTheme();
    const [eventData, setEventData] = useState({});
    const [userData, setUserData] = useState({});
    const [selectedEvent, setSelectedEvent] = useState('');
    const [tabValue, setTabValue] = useState(0);
    const [currentEventData, setCurrentEventData] = useState([]);
    const [isEventSelected, setIsEventSelected] = useState(false);
    let ref = firebase.database().ref();    
    let eventChild = ref.child("Events");
    let userChild = ref.child("user1");


    useEffect(() => {
        eventChild.on("value", snapshot => {
            setEventData(snapshot.val());
            setSelectedEvent(Object.values(snapshot.val())[0].id);
            setCurrentEventData(Object.values(snapshot.val())[0]);
            setIsEventSelected(true);
        });
        userChild.on("value", snap => {
            let snapshot = snap.val();
            let userData = {};
            Object.values(snapshot).forEach((event,i) => {
                if(userData[event.eventid]){ userData[event.eventid].push({name: event.username,skills: event.skills}) }
                else  userData[event.eventid] = [{ name: event.username, skills : event.skills}];
            })
            setUserData(userData);
        });
    }, [])

    const handleSelectChange = name => event => {
        let value = event.target.value;
        setSelectedEvent(value);
        setCurrentEventData(eventData[value]);
    };
    function handleTabChange(event, newValue) {
        setTabValue(newValue);
    }
    function handleChangeIndex(index) {
        setTabValue(index);
    }
    let numVolunteers;
    let temp = userData[currentEventData.id];
    if(temp) numVolunteers = temp.length;
	return (
		<div style={{ width: '100%'}}>
            <AppBar position="static" color="default">
                <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                >
                    <Tab label="Event Report" />
                    <Tab label="Volunteer Report" />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={tabValue}
                onChangeIndex={handleChangeIndex}
            >
                <TabContainer dir={theme.direction}>
                    <div style={{ display: 'flex',width:'100%',justifyContent:'space-around' }}>
                        <FormControl className={classes.formControl}>
                            <label>Select Event</label>
                            <Select
                                native
                                value={selectedEvent}
                                onChange={handleSelectChange('event')}
                                inputProps={{
                                    name: 'event',
                                    id: 'age-native-simple',
                                }}
                            >
                                {
                                    Object.keys(eventData).map((event, i) => {
                                        return <option key={i} value={event}>{eventData[event].name}</option>
                                    })
                                }
                            </Select>
                        </FormControl>
                        <div style={{textAlign:'center' }}>
                            {
                                isEventSelected &&
                                <div className="report-wrapper">
                                    <div>
                                        <p>Event Name: {currentEventData.name}</p>
                                        <p>Event Date: {currentEventData.date.slice(1,11)}</p>
                                        <p>Number of Volunteers: {numVolunteers}</p>
                                    </div>
                                </div>
                            }
                            {
                                !isEventSelected && <div>No Event Selected</div>
                            }
                        </div>
                    </div>
                </TabContainer>
                <TabContainer dir={theme.direction}>
                    <VolunteerReport />
                </TabContainer>
            </SwipeableViews>
            
        </div>
	);
}