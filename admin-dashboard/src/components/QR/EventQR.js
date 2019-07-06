import React, { useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import firebase from './../../Firebase';

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
    const [state, setState] = useState({
        event: ''
    });
    const [eventData, setEventData] = useState({});
    let ref = firebase.database().ref();    
    let eventChild = ref.child("Events");

    useEffect(() => {
        eventChild.on("value", snapshot => {
            setEventData(snapshot.val());
        });
    }, [])

    const handleChange = name => event => {
        let value = event.target.value;
        setState({
            ...state,
            [name]: value,
        });
    };
    return(
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Select Event</InputLabel>
                <Select
                    native
                    value={state.age}
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
        </div>
    );
}

export default EventQR;