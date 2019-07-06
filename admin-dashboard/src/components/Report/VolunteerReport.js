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

export default function EventReport() {
    const classes = useStyles();
    const theme = useTheme();
    const [volunteerData, setVolunteerData] = useState({});
    const [currentVolunteerData, setcurrentVolunteerData] = useState({});
    let ref = firebase.database().ref();    
    let volunteerChild = ref.child("volunteers");

    useEffect(() => {
        volunteerChild.on("value", snapshot => {
            console.log(snapshot.val());
            setVolunteerData(snapshot.val());
        });
    }, [])

    const handleSelectChange = name => event => {
        let value = event.target.value;
    };

    return(
        <div>SOme Volunteeer</div>
    );
}
