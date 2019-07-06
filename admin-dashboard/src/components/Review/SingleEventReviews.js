import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
}));

function SingleEventReview(props){
	const classes = useStyles();
    return(
        <Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
				<TableRow>
					<TableCell>Name</TableCell>
					<TableCell>Skills</TableCell>
					<TableCell>Accept</TableCell>
					<TableCell>Reject</TableCell>
				</TableRow>
				</TableHead>
				<TableBody>
				{props.usersData.map(row => (
					<TableRow key={row.name}>
						<TableCell>{row.name}</TableCell>
						<TableCell>{row.skills}</TableCell>
						<TableCell>
							<Button variant="outlined" color="primary" className={classes.button}>
								Accept
							</Button>
						</TableCell>
						<TableCell>
							<Button variant="outlined" color="primary" className={classes.button}>
								Reject
							</Button>
						</TableCell>
					</TableRow>
				 ))} 
				</TableBody>
			</Table>
		</Paper>
    );
}

export default SingleEventReview;