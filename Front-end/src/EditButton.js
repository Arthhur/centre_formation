import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

function EditButton(props) {
    const classes = useStyles();
    return (
        <Fab color="secondary" aria-label="Edit" className={classes.fab}>
        <EditIcon onClick={props.onClick}/>
      </Fab>
    ) ;
}

export default EditButton