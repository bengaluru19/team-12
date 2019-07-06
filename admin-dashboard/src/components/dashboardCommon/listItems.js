import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <Link to="/">
        <ListItem button>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Create Event" />
        </ListItem>
    </Link>
    <Link to="/review">
        <ListItem button>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Review Requests" />
        </ListItem>
    </Link>
    <Link to="/qr">
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Generate QR" />
        </ListItem>
    </Link>
    <Link to="/reports">
        <ListItem button>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
        </ListItem>
    </Link>
  </div>
);
