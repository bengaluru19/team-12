import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import VolunteerReport from './VolunteerReport';
import firebase from './../../Firebase';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
}));

export default function EventReport() {
    const classes = useStyles();
    const [volunteerData, setVolunteerData] = useState({});
    const [currentVolunteerData, setcurrentVolunteerData] = useState({});
    const [isEventSelected, setIsEventSelected] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(false);
    let ref = firebase.database().ref();    
    let volunteerChild = ref.child("volunteers");

    useEffect(() => {
        volunteerChild.on("value", snapshot => {
            setVolunteerData(snapshot.val());
            let firstVolunteerData = Object.values(snapshot.val())[0];
            setcurrentVolunteerData(firstVolunteerData);
            setIsEventSelected(true);
        });
    }, [])

    const handleSelectChange = name => event => {
        let value = event.target.value;
        setSelectedEvent(value);
        setIsEventSelected(false);
        setcurrentVolunteerData(volunteerData[value]);
        setIsEventSelected(true);
    };

    console.log(currentVolunteerData);
    return(
        <div style={{ width: '100%'}}>
            <div style={{ display: 'flex',width:'100%',justifyContent:'space-around' }}>
                <Paper style={{ padding: '30px', width:'400px' }}>
                    <FormControl className={classes.formControl}>
                        <h2>Select Volunteer</h2>
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
                                Object.keys(volunteerData).map((vol, i) => {
                                    return <option key={i} value={volunteerData[vol].name}>{volunteerData[vol].name}</option>
                                })
                            }
                        </Select>
                    </FormControl>
                </Paper>
                <div>
                    <Paper style={{ width:'400px' }}  className="event-report-paper">
                        {
                            isEventSelected &&
                            <div className="report-wrapper">
                                <div>
                                    <p><b>Volunteer Name:</b> {currentVolunteerData.name}</p>
                                    <p><b>Volunteer Email:</b> {currentVolunteerData.email}</p>
                                    <p><b>Contact:</b> {currentVolunteerData.number}</p>
                                    {
                                        currentVolunteerData.Events && 
                                        <p><b>Number of Events Attended:</b> {Object.keys(currentVolunteerData.Events).length}</p>

                                    }
                                </div>
                            </div>
                        }
                        {
                            !isEventSelected && <div>No Event Selected</div>
                        }
                    </Paper>
                </div>
            </div>
        </div>
    );
}
