import React,{Component} from 'react';
import { parseJwt } from '../../Services/auth';
import {Link} from 'react-router-dom';

class DashBoardAdmn extends Component{
    render(){
        return(
            <div>
                <p>Bem vindo, {parseJwt().Nome}</p>
                <div>
                    <div><Link to='/categorias'>Cadastrar e visualizar categorias</Link></div>
                    <div><Link to='/cadastraradministrador'>Cadastrar usuário</Link></div>
                    <div><Link to='/cadastrarlancamento'>Cadastrar lançamento</Link></div>
                    <div><Link to='/plataformas'>Cadastrar e visualizar plataformas</Link></div>
                    <div><Link to='/listarlancamentos'>Visualizar lançamentos</Link></div>
                    <div><Link to='/usuarios'>Visualizar usuários</Link></div>
                </div>
            </div>
        )
    }
}

export default DashBoardAdmn;