import {Route, Link, BrowserRouter, Router, Switch, Redirect} from 'react-router-dom';

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
import ListarUsuarios from './Pages/ListarUsuários/ListarUsuario';
import NaoEncontrado from './Pages/NãoEncontrado/NaoEncontrado';
import DashBoardAdmin from './Pages/DashBoardAdmin/DashBoardAdmin';
import DashBoardCliente from './Pages/DashBoardCliente/DashBoardCliente';
import * as serviceWorker from './serviceWorker';
import { parseJwt } from './Services/auth';

const RotaPrivada = ({ component: Component}) => (
    <Route 
        render={
            props =>
                parseJwt().Permissao === '2' ? (
                    <DashBoardCliente {...props} />
                ) : (
                    <DashBoardAdmin {...props} />
                )
        }
    />
);

const QualquerUsuario = ({component: Component}) =>(
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

const PermissaoADM = ({ component: Component }) => (
    <Route
        render={
            props =>
            localStorage.getItem("usuario-opflix") !== null ? (
                parseJwt().Permissao === "1" ? (
                    <Component {...props} />
                ) : (
                        <NaoEncontrado/>
                    )
            )
                    : (
                        <Redirect 
                            to={{ pathname: "/login", state: {from: props.location}}}
                        />
                    )
        }
    />
);


const routing = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/login' component={Login} />
                <PermissaoADM path='/plataformas' component={Platafoma}/>
                <PermissaoADM path='/categorias' component={Categoria}/>
                <Route path='/cadastrarcliente' component={CadastrarCliente}/>
                <PermissaoADM path='/cadastraradministrador' component={CadastrarAdmin}/>
                <QualquerUsuario path='/listarlancamentos' component={ListarLancamentos}/>
                <PermissaoADM path='/cadastrarlancamento' component={CadastrarLancamento}/>
                <PermissaoADM path='/usuarios' component={ListarUsuarios}/>
                <RotaPrivada path='/dashboard' component={DashBoardCliente}/>
                <Route component={NaoEncontrado}/>
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
