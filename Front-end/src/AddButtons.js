import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link, Route, Switch } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

function AddButton(props) {
    const classes = useStyles();
    return (
        <Fab color="primary" aria-label="Add" className={classes.fab} >
          <Link to="/client/create">
            <AddIcon />
          </Link>
        </Fab>
    ) ;
}


export default AddButton