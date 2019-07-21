import React from 'react';
import ClientRow from './ClientRow';
import './client.css' ;

const thStyle = {
    textAlign : 'center',
    fontWeight : 'bold'
} ;


class ClientTable extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.clients) ;
        this.ClientRows = this.props.clients.map(client =><ClientRow  key={client.id} client={client}/>);
    }

   render() {

    return (
            <table className="table">
                <thead>
                    <tr>
                        <th style={thStyle}>Id</th>
                        <th style={thStyle}>Rs</th>
                        <th style={thStyle}>Nom</th>
                        <th style={thStyle}>Prénom</th>
                        <th style={thStyle}>Entreprise</th>
                        <th style={thStyle}>Adresse</th>
                        <th style={thStyle}>Cp</th>
                        <th style={thStyle}>Tel</th>
                        <th style={thStyle}>Fax</th>
                        <th style={thStyle}>Email</th>
                        <th style={thStyle}>Tva</th>
                        <th style={thStyle}>Ape</th>
                        <th style={thStyle}></th>
                    </tr>
                </thead>
                <tbody>{this.ClientRows}</tbody>
            </table>
        );
   }
 }

 export default ClientTable