import React from 'react';
import ReactDOM from 'react-dom';
import ClientList from './Client/Client';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Link, Route, Switch } from 'react-router-dom';
import ClientAdd from './Client/ClientAdd' ;
import Notfound from './NotFound';
import './home.css' ;


const Home = () => (
    <div className="content">
      <h1>Bienvenue au centre de formation</h1>
    </div>
)

const routing = (
    <Router>
     <div>
       <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className="nav-link active">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/client" className="nav-link">
                    Clients
                </Link>
            </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/client" component={ClientList} />
          <Route exact path="/client/create" component={ClientAdd} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
