import React,{Component} from 'react';
import Axios from 'axios';
import logo from '../../Assets/img/Logo.jpg';
import imgBackGround from '../../Assets/img/Retângulo 3.png';
import {Link} from 'react-router-dom';

class CadastrarCliente extends Component{

    constructor(){
        super();
        this.state = {
            Nome: '',
            Email: '',
            Senha: '',
            Telefone: '',
            CPF: '',
            DataNascimento: ''
        };
    }

    // componentDidMount () {
    //     Axios.get('http://localhost:5000/api/usuarios')
    //     .then(data => {
    //         this.setState({Lista: data.data});
    //     })
    //     .catch(erro => {
    //         console.log(erro)
    //     });
    // }

    adicionarItem = (event) => {
        event.preventDefault();
        console.log(this.state.li);
        Axios.post('http://localhost:5000/api/usuarios/CadastrarCliente', {
            NomeUsuario: this.state.Nome, 
            EmailUsuario: this.state.Email,
            SenhaUsuario: this.state.Senha,
            Telefone: this.state.Telefone,
            Cpf: this.state.CPF,
            DataDeNascimento: this.state.DataNascimento
        }, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
            }
        })
        .then(response =>{console.log(response)})
        .catch(erro => { 
            this.setState({ erro: "Não foi possível cadastrar"});
            console.log(erro);
        });
    }

    atualizarNome = (event) =>{
        this.setState({Nome: event.target.value})
        console.log(this.state);
    }
    atualizarEmail = (event) =>{
        this.setState({Email: event.target.value})
        console.log(this.state);
    }
    atualizarSenha = (event) =>{
        this.setState({Senha: event.target.value})
        console.log(this.state);
    }
    atualizarTelefone = (event) =>{
        this.setState({Telefone: event.target.value})
        console.log(this.state);
    }
    atualizarCPF = (event) =>{
        this.setState({CPF: event.target.value})
        console.log(this.state);
    }
    atualizarData = (event) =>{
        this.setState({DataNascimento: event.target.value})
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <nav>
                    <ul>
                        <li><img src={logo} alt=""/></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </nav>
                    <div>
                        <form action="">
                            <input type="text" placeholder="Nome" onInput={this.atualizarNome}></input>
                            <input type="text" placeholder="Email" onInput={this.atualizarEmail}></input>
                            <input type="password" placeholder="Senha" onInput={this.atualizarSenha}></input>
                            <input type="text" placeholder="Telefone" onInput={this.atualizarTelefone}></input>
                            <input type="text" placeholder="CPF" onInput={this.atualizarCPF}></input>
                            <input type="text" placeholder="Data de nascimento" onInput={this.atualizarData}></input>
                            <button onClick={this.adicionarItem}>Cadastrar</button>
                        </form>
                    </div>
            </div>
        );
    }
}

export default CadastrarCliente