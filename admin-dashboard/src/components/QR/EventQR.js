import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import firebase from './../../Firebase';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

function EventQR(){
    const classes = useStyles();
    const [selectedEvent, setSelectedEvent] = useState('');
    const [eventData, setEventData] = useState({});
    let ref = firebase.database().ref();    
    let eventChild = ref.child("Events");

    useEffect(() => {
        eventChild.on("value", snapshot => {
            setEventData(snapshot.val());
            setSelectedEvent(Object.values(snapshot.val())[0].name);
        });
    }, [])

    const handleChange = name => event => {
        let value = event.target.value;
        setSelectedEvent(value);
    };
    return(
        <div style={{ width: '100%'}}>
        <div style={{ display: 'flex',width:'100%',justifyContent:'space-around' }}>
            <Paper style={{ padding: '30px', width:'400px' }}>
                <FormControl className={classes.formControl}>
                    <h2>Select Event</h2>
                    <Select
                        native
                        value={selectedEvent}
                        onChange={handleChange('event')}
                        inputProps={{
                            name: 'event',
                            id: 'age-native-simple',
                        }}
                    >
                        {
                            Object.keys(eventData).map((event, i) => {
                            return <option key={i} value={eventData[event].name}>{eventData[event].name}</option>
                            })
                        }
                    </Select>
                </FormControl>
            </Paper>
            
            <div style={{textAlign:'center'}}>
                <Paper style={{ width:'400px' }}  className="event-report-paper">
                    <h2>QR Code for {selectedEvent} Event is:</h2>
                    { selectedEvent==='' && "No selectedEvent" }
                    { selectedEvent!== '' && <QRCode value={selectedEvent} /> }
                </Paper>
            </div>
        </div>
        <br />
            <br />
            <br />
            <Link to="/scan">scan</Link>
        </div>
    );
}

export default EventQR;