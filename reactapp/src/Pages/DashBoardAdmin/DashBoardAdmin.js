import React,{Component} from 'react';
import { parseJwt } from '../../Services/auth';
import {Link} from 'react-router-dom';

class DashBoardAdmn extends Component{
    render(){
        return(
            <div id='DashBoardAdmin'>
                <p>Bem vindo(a), {parseJwt().Nome}</p>
                <div class="quadradinhos">
                    <Link class='quadrado' to='/categorias'>Cadastrar e visualizar categorias</Link>
                    <Link class='quadrado' to='/cadastraradministrador'>Cadastrar usuário</Link>
                    <Link class='quadrado' to='/cadastrarlancamento'>Cadastrar lançamento</Link>
                    <Link class='quadrado' to='/plataformas'>Cadastrar e visualizar plataformas</Link>
                    <Link class='quadrado' to='/listarlancamentos'>Visualizar lançamentos</Link>
                    <Link class='quadrado' to='/usuarios'>Visualizar usuários</Link>
                </div>
            </div>
        )
    }
}

export default DashBoardAdmn;