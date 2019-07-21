import React from 'react';
import axios from 'axios';
import './client.css' ;

const formStyle = {
    display : 'flex',
    flexDirection : 'column',
    width : '30%'
} ;


class ClientAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            rs: '',
            nom: '',
            prenom: '',
            entreprise: '',
            adresse: '',
            cp: '',
            tel: '',
            fax: '',
            email: '',
            tva: '',
            ape: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this) ;
    }

    createClient(client) {
        axios.post('http://127.0.0.1:8000/api/create/client', client)
        .then(
            res => {
                console.log(res) ;
            },
            error => {
                console.log(error) ;
            }
        ) 
    }

    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        var form = document.forms.clientAdd;
        this.createClient({
            rs: form.rs.value,
            nom: form.nom.value,
            prenom: form.prenom.value,
            entreprise: form.entreprise.value,
            adresse: form.adresse.value,
            cp: form.cp.value,
            tel: form.tel.value,
            fax: form.fax.value,
            email: form.email.value,
            tva: form.tva.value,
            ape: form.ape.value
        });
        // mets à zéro le formulaire pour la nouvelle saisie
        form.rs.value = ""; 
        form.nom.value = "";
        form.prenom.value = ""; 
        form.entreprise.value = "";
        form.adresse.value = ""; 
        form.cp.value = "";
        form.tel.value = ""; 
        form.fax.value = "";
        form.email.value = ""; 
        form.tva.value = "" ;
        form.ape.value = "" ;
        
    }
    render() {
        return (
            <div>
                <form style={formStyle} name="clientAdd" onSubmit={this.handleSubmit}>
                    <input type="text" name="rs" placeholder="Raison sociale" value={this.state.rs} onChange={this.handleInputChange}/>
                    <input type="text" name="nom" placeholder="Nom" value={this.state.nom} onChange={this.handleInputChange}/>
                    <input type="text" name="prenom" placeholder="Prénom" value={this.state.prenom} onChange={this.handleInputChange}/>
                    <input type="text" name="entreprise" placeholder="Entreprise" value={this.state.entreprise} onChange={this.handleInputChange} />
                    <input type="text" name="adresse" placeholder="Adresse" value={this.state.adresse} onChange={this.handleInputChange}/>
                    <input type="text" name="cp" placeholder="Cp" value={this.state.cp} onChange={this.handleInputChange}/>
                    <input type="text" name="tel" placeholder="Tel" value={this.state.tel} onChange={this.handleInputChange}/>
                    <input type="text" name="fax" placeholder="Fax" value={this.state.fax} onChange={this.handleInputChange}/>
                    <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange}/>
                    <input type="text" name="tva" placeholder="Tva" value={this.state.tva} onChange={this.handleInputChange}/>
                    <input type="text" name="ape" placeholder="Ape" value={this.state.ape} onChange={this.handleInputChange}/>
                    <input type="submit" value="Ajouter"></input>
                </form>
            </div>
        ) ;
    }
}

export default ClientAdd