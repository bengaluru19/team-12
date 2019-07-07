import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import idGenerator from 'react-id-generator';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import firebase from './../Firebase';
import axios from 'axios';


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
    close: {
        padding: theme.spacing(0.5),
    },
}));

export default function CreateEvent() {
    const classes = useStyles();
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-06-07T21:11:54'));
    const [values, setValues] = React.useState({
        name: '',
        skills: '',
        materials: '',
        location: '',
        numParticipant: 0,
        description: ''
    });
  
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };
    function handleDateChange(date) {
        setSelectedDate(date);
    }
    function handleChangeImage(event){
        let file = event.target.files[0];
        let formData = new FormData();
        formData.append("image", file);
        axios.post('https://api.imgbb.com/1/upload', {
            key: '7e7644053b20a96dc8d9c56c6125986f',
            image: formData
        }, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    function handleSnackBarClose(event, reason) {
        if (reason === 'clickaway') {
          return;
        }
        setSnackbarOpen(false);
    }
    function handleSubmit(){
        let dataToSend = values;
        dataToSend['date'] = JSON.stringify(selectedDate);
        dataToSend.id = idGenerator(dataToSend.name);

        let ref = firebase.database().ref();
        let child = ref.child("Events");
        child.push().set(dataToSend);
        let child2 = ref.child("events");
        let data2 = {
            date: dataToSend.date,
            description : dataToSend.description,
            id : dataToSend.id,
            name: dataToSend.name,
        }
        child2.push().set(data2);
        let receiverEmail = "sauravbhagat6969@gmail.com";
        let template = 'template_9tqfVEAj';
        window.emailjs.send("gmail", "template_9tqfVEAj", {
            from_name: 'careworks',
            to_name: 'saurav',
            message_html : 'Greetings'
        })
            .then(res => {
                console.log(res);
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Failed to send feedback. Error: ', err))
        setValues({
            name: '',
            skills: '',
            materials: '',
            location: '',
            numParticipant: '',
            description: ''
        });
        window.location.reload();

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
                <TextField
                    required
                    id="standard-required"
                    label="Description"
                    className={classes.textField}
                    onChange={handleChange('description')}
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
                            onChange={handleChangeImage}
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
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackBarClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Succesfully Created</span>}
                action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={handleSnackBarClose}
                >
                    <CloseIcon />
                </IconButton>,
                ]}
            />
        </div>
    );
  }