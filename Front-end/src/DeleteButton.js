import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';


const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));


class DeleteButton extends React.Component {
  constructor() {
    super() ;
    this.deleteClient = this.deleteClient.bind(this) ;
  }

  deleteClient() {
   axios.delete('http://127.0.0.1:8000/api/delete/client/'+ this.props.id)
    .then(
        res => {
            console.log(res) ;
        },
        error => {
            console.log(error) ;
        }
    )

  }
  render() {
    return (
      <button type="button" className="btn btn-danger" onClick={this.deleteClient}>Supprimer</button>
    ) ;
  }
}

export default DeleteButton