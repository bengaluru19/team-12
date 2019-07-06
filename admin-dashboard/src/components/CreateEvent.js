import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


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
    const [values, setValues] = React.useState({
      name: '',
      age: '',
      multiline: 'Controlled',
      currency: 'EUR',
    });
  
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };
  
    return (
        <div>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-required"
                    className={classes.textField}
                    label="Name"
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                />
                <TextField
                    id="standard-required"
                    label="Location"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    required
                    id="standard-required"
                    label="Time"
                    className={classes.textField}
                    margin="normal"
                />
            </form>
            <br />
            <br />
            <Button variant="contained" color="primary" className={classes.button}>
                Submit
            </Button>
        </div>
    );
  }