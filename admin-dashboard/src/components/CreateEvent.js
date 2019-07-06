import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import firebase from './../Firebase';


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
}));

export default function CreateEvent() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-06-07T21:11:54'));
    const [values, setValues] = React.useState({
        name: '',
        skills: '',
        materials: '',
        location: '',
        numParticipant: 0
    });
  
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };
    function handleDateChange(date) {
        setSelectedDate(date);
    }
    function handleSubmit(){
        let dataToSend = values;
        dataToSend.date = selectedDate;
        let ref = firebase.firestore().collection('events');
        ref.get().then(doc => {
            console.log(doc.snapshot());
        }).catch(err => console.log(err));
        console.log(dataToSend);
    }
  
    return (
        <div>
            {/* <form className={classes.container} noValidate autoComplete="off"> */}
                <TextField
                    id="standard-required"
                    className={classes.textField}
                    label="Event Name"
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                />
                <TextField
                    id="standard-required"
                    label="Location"
                    className={classes.textField}
                    onChange={handleChange('location')}
                    margin="normal"
                />
                <TextField
                    required
                    id="standard-required"
                    label="Number of Participants"
                    className={classes.textField}
                    onChange={handleChange('numParticipant')}
                    margin="normal"
                />
                <br />
                <p>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        {/* <Grid container className={classes.grid} justify="space-around"> */}
                            <KeyboardDatePicker
                                margin="normal"
                                id="mui-pickers-date"
                                label="Choose Date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        {/* </Grid> */}
                    </MuiPickersUtilsProvider>
                    <span style={{ position:'relative', top:'27px', left: '15px' }}>
                        <span>Select Image</span>
                        <input
                            accept="image/*"
                            className={classes.input}
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" component="span" className={classes.button}>
                                Upload
                            </Button>
                        </label> 
                    </span>
                </p>
                <TextField
                    required
                    id="standard-required"
                    label="Materials Required"
                    className={classes.textField}
                    onChange={handleChange('materials')}
                    margin="normal"
                />
                <TextField
                    required
                    id="standard-required"
                    label="Skills set"
                    className={classes.textField}
                    onChange={handleChange('skills')}
                    margin="normal"
                />
                <TextField
                    required
                    id="standard-required"
                    label="Coordinator Name"
                    className={classes.textField}
                    onChange={handleChange('coordinator-name')}
                    margin="normal"
                />
                <TextField
                    required
                    id="standard-required"
                    label="Contact"
                    className={classes.textField}
                    onChange={handleChange('contact')}
                    margin="normal"
                />
               
            {/* </form> */}
            <br />
            <br /><br />
            <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
                Submit
            </Button>
        </div>
    );
  }