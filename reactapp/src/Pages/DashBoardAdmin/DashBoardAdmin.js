import React,{Component} from 'react';
import { parseJwt } from '../../Services/auth';
import {Link} from 'react-router-dom';
import logo from '../../Assets/img/Logo.jpg';

class DashBoardAdmn extends Component{

    Logout = (event) => {
        localStorage.removeItem("usuario-opflix");
        this.props.history.push('/');
    }

    render(){
        return(
            <div id='DashBoardAdmin'>
                <nav>
                    <ul>
                        <li><img src={logo} alt=""/></li>
                        <li><Link onClick={this.Logout} to='/'>Sair</Link></li>
                    </ul>
                </nav>
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