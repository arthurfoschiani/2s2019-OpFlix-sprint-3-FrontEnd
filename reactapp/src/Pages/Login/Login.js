import React,{Component} from 'react';

import logo from '../../Assets/img/Logo.jpg';

import imgemBackGround from '../../Assets/img/Retângulo 3.png';

import Axios from 'axios';

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
        
        Axios.post("http://localhost:5000/api/login", {
            email: this.state.email, 
            senha: this.state.senha
        })
            .then(response =>{
                if(response.status === 200){
                    console.log(response.data.token);
                    localStorage.setItem("usuario-opflix",response.data.token);
                    this.props.history.push('/');
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
            <div>
                <nav>
                    <ul>
                        <li><img src={logo} alt=""/></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
                <div>
                    <div>
                        <img src={imgemBackGround} alt=""/>
                    </div>
                    <div>
                        <form action="" onSubmit={this.efetuarLogin}>
                            <input type="text" placeholder="Email" onInput={this.atualizaEstadoEmail}></input>
                            <p className="text__login" style={{color: "red", textAlign: "center"}}>
                                {this.state.erro}
                            </p>
                            <input type="password" placeholder="Senha" onInput={this.atualizaEstadoSenha}></input>
                            <button>Entrar</button>
                            <a href="#">Criar conta</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;