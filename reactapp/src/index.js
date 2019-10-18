import {Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Pages/Home/App';
import Platafoma from './Pages/Plataforma/Plataforma';
import Login from './Pages/Login/Login';
import Categoria from './Pages/Categoria/Categoria';
import CadastrarCliente from './Pages/CadastrarCliente/CadastrarCliente';
import CadastrarAdmin from './Pages/CadastrarAdmin/CadastrarAdmin';
import ListarLancamentos from './Pages/ListarLançamento/ListarLancamento';
import CadastrarLancamento from './Pages/CadastrarLançamento/CadastrarLancamento';
import * as serviceWorker from './serviceWorker';

const RotaPrivada = ({component: Component}) =>(
    <Route
        render={props =>
            localStorage.getItem("usuario-opflix") !== null ? (
                <Component {...props} /> 
            ) : (
                <Redirect 
                    to={{ pathname: "/login", state: {from: props.location}}}
                />
            )
        }
    />        
);



const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/login' component={Login} />
                <Route path='/plataformas' component={Platafoma}/>
                <Route path='/categorias' component={Categoria}/>
                <Route path='/cadastrarcliente' component={CadastrarCliente}/>
                <Route path='/cadastraradministrador' component={CadastrarAdmin}/>
                <Route path='/listarlancamentos' component={ListarLancamentos}/>
                <Route path='/cadastrarlancamento' component={CadastrarLancamento}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
