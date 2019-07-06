import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
            setSelectedEvent(Object.values(snapshot.val())[0].id);
        });
    }, [])

    const handleChange = name => event => {
        let value = event.target.value;
        setSelectedEvent(value);
    };
    return(
        <div style={{ width: '100%'}}>
        <div style={{ display: 'flex',width:'100%',justifyContent:'space-around' }}>
            <FormControl className={classes.formControl}>
                <label>Select Event</label>
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
                           return <option key={i} value={eventData[event].id}>{eventData[event].name}</option>
                        })
                    }
                </Select>
            </FormControl>
            <div style={{textAlign:'center'}}>
                <h2>QR Code for this Event is:</h2>
                { selectedEvent==='' && "No selectedEvent" }
                { selectedEvent!== '' && <QRCode value={selectedEvent} /> }
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