import React from 'react';
import axios from 'axios';
import AddButton from '../AddButtons' ;
import ClientTable from './ClientTable';


class ClientDescription extends React.Component {
    render() {
        return (
            <div>Clients du centre de formation</div>
        ) ;
    }
}

class ClientList extends React.Component {

    constructor() {
        super();
        this.state = { clients: [] };
    }
    componentDidMount() {
         //this.loadData();
         this.test() ;
    }
    loadData() {
        axios.get('http://127.0.0.1:8000/api/get/clients')
        .then(
            res => {
                console.log(res.data) ;
                this.setState({clients: res.data}) ;
            },
            error => {
                console.log(error) ;
            }
        )
    }

    editClient(id) {
        axios.put('http://127.0.0.1:8000/api/edit/client/' + id)
        .then(
            res => {
                console.log(res) ;
                this.loadData() ;
            },
            error => {
                console.log(error) ;
            }
        )  
    }

    test() {
        console.log('test') ;
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        axios.get(proxyurl + 'http://192.168.0.20/isystem.cgi', {
            auth: {
              username: 'admin',
              password: 'Cesi2017Cesi2017'
            }
          }).then(function(response) {
            console.log(response);
          }).catch(function(error) {
            console.log(error);
          });
    }
    
    render() {
        if(this.state.clients.length === 0) {
            return null ;
        }
        else {
            return (
                
                <div>
                    <div>
                        <p>test</p>
                        <h1>Clients</h1>
                        <ClientDescription />
                        <hr />
                        <ClientTable clients={this.state.clients}/>
                        <hr />
                        <AddButton />
                    </div>
                </div>
            );
        }
   } 
}

export default ClientList