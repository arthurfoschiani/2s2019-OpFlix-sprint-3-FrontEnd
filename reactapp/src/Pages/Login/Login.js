import React,{Component} from 'react';

import logo from '../../Assets/img/Logo.jpg';

import Axios from 'axios';

import {Link} from 'react-router-dom';

import '../../Assets/css/style.css';


class Login extends Component{

    constructor(){
        super();
        this.state = {
            email: "",
            senha: "",
            erro: ""
        }
    }

    atualizaEstadoEmail = (event) =>{
        this.setState({email: event.target.value});
    }

    atualizaEstadoSenha = (event) =>{
        this.setState({senha: event.target.value});
    }
    
    efetuarLogin = (event) =>{
        event.preventDefault();
        
        Axios.post("http://192.168.3.14:5000/api/login", {
            email: this.state.email, 
            senha: this.state.senha
        })
            .then(response =>{
                if(response.status === 200){
                    console.log(response.data.token);
                    localStorage.setItem("usuario-opflix",response.data.token);
                    this.props.history.push('/dashboard');
                }else{
                    console.log('vish deu ruim');
                }
            })
            .catch(erro => { 
                this.setState({ erro: "Usuário ou senha inválidos"});
                console.log(erro);
            });
    }

    render () {
        return(
            <div id='Login'>
                <nav>
                    <ul>
                        <li><Link to='/'><img src={logo} alt=""/></Link></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
                    <div className='infos'> 
                        <form action="" onSubmit={this.efetuarLogin}>
                            <input type="text" placeholder="Email" onInput={this.atualizaEstadoEmail}></input>
                            <p className="text__login" style={{color: "red", textAlign: "center"}}>
                                {this.state.erro}
                            </p>
                            <input type="password" placeholder="Senha" onInput={this.atualizaEstadoSenha}></input>
                            <div className='separar'>
                                <button>Entrar</button>
                                <Link to='/cadastrarcliente'>Criar conta</Link>
                            </div>
                        </form>
                    </div>
            </div>
        )
    }
}

export default Login;