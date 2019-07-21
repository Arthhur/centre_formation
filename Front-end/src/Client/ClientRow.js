import React from 'react';
import EditButton from '../EditButton' ;
import DeleteButton from '../DeleteButton';
import './client.css' ;


const tdStyle = {
    textAlign : 'center',
} ;

class ClientRow extends React.Component {
    constructor(props) {
        super(props) ;
    }

    render() {
        return(
            <tr>
                <td style={tdStyle}>{this.props.client.id}</td>
                <td style={tdStyle}>{this.props.client.rs}</td> 
                <td style={tdStyle}>{this.props.client.nom}</td> 
                <td style={tdStyle}>{this.props.client.prenom}</td> 
                <td style={tdStyle}>{this.props.client.entreprise}</td> 
                <td style={tdStyle}>{this.props.client.adresse}</td> 
                <td style={tdStyle}>{this.props.client.cp}</td> 
                <td style={tdStyle}>{this.props.client.tel}</td> 
                <td style={tdStyle}>{this.props.client.fax}</td> 
                <td style={tdStyle}>{this.props.client.email}</td>
                <td style={tdStyle}>{this.props.client.tva}</td>
                <td style={tdStyle}>{this.props.client.ape}</td>
                <td style={tdStyle} className="buttons"><EditButton /><DeleteButton id={this.props.client.id}/></td>

            </tr> 
        ) ;
    }
}

export default ClientRow