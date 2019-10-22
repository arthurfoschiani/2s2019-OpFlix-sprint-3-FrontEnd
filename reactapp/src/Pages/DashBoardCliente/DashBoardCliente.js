import React,{Component} from 'react';
import { parseJwt } from '../../Services/auth';
import {Link} from 'react-router-dom';

class DashBoardCliente extends Component{
    render(){
        return(
            <div>
                <p>Bem vindo, {parseJwt().Nome}{}</p>
                <div>
                    <div><Link to='/listarlancamentos'>Lançamentos</Link></div>
                    <div><Link to='/cadastrarcliente'>Cadastrar usuário</Link></div>
                </div>
            </div>
        )
    }
}

export default DashBoardCliente;