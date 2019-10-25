import React,{Component} from 'react';
import { parseJwt } from '../../Services/auth';
import {Link} from 'react-router-dom';

class DashBoardCliente extends Component{
    render(){
        return(
            <div id='DashBoardCliente'>
                <p>Bem vindo(a), {parseJwt().Nome}{}</p>
                <div className="quadradinhos">
                    <Link className='quadrado' to='/listarlancamentos'>Lançamentos</Link>
                    <Link className='quadrado' to='/cadastrarcliente'>Cadastrar usuário</Link>
                </div>
            </div>
        )
    }
}

export default DashBoardCliente;