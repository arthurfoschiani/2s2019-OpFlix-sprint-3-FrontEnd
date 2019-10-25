import React,{Component} from 'react';
import { parseJwt } from '../../Services/auth';
import {Link} from 'react-router-dom';

class DashBoardAdmn extends Component{
    render(){
        return(
            <div id='DashBoardAdmin'>
                <p>Bem vindo(a), {parseJwt().Nome}</p>
                <div className="quadradinhos">
                    <Link className='quadrado' to='/categorias'>Cadastrar e visualizar categorias</Link>
                    <Link className='quadrado' to='/cadastraradministrador'>Cadastrar usuário</Link>
                    <Link className='quadrado' to='/cadastrarlancamento'>Cadastrar lançamento</Link>
                    <Link className='quadrado' to='/plataformas'>Cadastrar e visualizar plataformas</Link>
                    <Link className='quadrado' to='/listarlancamentos'>Visualizar lançamentos</Link>
                    <Link className='quadrado' to='/usuarios'>Visualizar usuários</Link>
                </div>
            </div>
        )
    }
}

export default DashBoardAdmn;