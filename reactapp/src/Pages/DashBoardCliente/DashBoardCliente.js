import React,{Component} from 'react';
import { parseJwt } from '../../Services/auth';
import {Link} from 'react-router-dom';
import logo from '../../Assets/img/Logo.jpg';

class DashBoardCliente extends Component{

    Logout = (event) => {
        localStorage.removeItem("usuario-opflix");
        this.props.history.push('/');
    }

    getParsedNome(nome){
        nome = String(nome).replace('Ã¡', 'á');
        return nome;
    }

    render(){
        return(
            <div id='DashBoardCliente'>
                <nav>
                    <ul>
                        <li><img src={logo} alt=""/></li>
                        <li><Link onClick={this.Logout} to='/'>Sair</Link></li>
                    </ul>
                </nav>
                <p>Bem vindo(a), {this.getParsedNome(parseJwt().Nome)}</p>
                <div className="quadradinhos">
                    <Link className='quadrado' to='/listarlancamentos'>Lançamentos</Link>
                    <Link className='quadrado' to='/cadastrarcliente'>Cadastrar usuário</Link>
                    <Link className='quadrado' to='/localizacao'>Localização dos lançamentos</Link>
                </div>
            </div>
        )
    }
}

export default DashBoardCliente;