import React,{Component} from 'react';
import { parseJwt } from '../../Services/auth';
import {Link} from 'react-router-dom';

class DashBoardCliente extends Component{
    render(){
        return(
            <div id='DashBoardCliente'>
                <p>Bem vindo(a), {parseJwt().Nome}{}</p>
                <div class="quadradinhos">
                    <Link class='quadrado' to='/listarlancamentos'>Lançamentos</Link>
                    <Link class='quadrado' to='/cadastrarcliente'>Cadastrar usuário</Link>
                </div>
            </div>
        )
    }
}

export default DashBoardCliente;