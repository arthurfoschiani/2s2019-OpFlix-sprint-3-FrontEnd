import React,{Component} from 'react';
import Axios from 'axios';
import logo from '../../Assets/img/Logo.jpg';
import imgBackGround from '../../Assets/img/Retângulo 3.png';

class CadastrarAdmin extends Component{

    constructor(){
        super();
        this.state = {
            Nome: '',
            Email: '',
            Senha: '',
            Telefone: '',
            CPF: '',
            DataNascimento: '',
            TipoUsuario: ''
        };
    }

    adicionarItem = (event) => {
        event.preventDefault();
        console.log(this.state.li);
        Axios.post('http://localhost:5000/api/usuarios', {
            NomeUsuario: this.state.Nome, 
            EmailUsuario: this.state.Email,
            SenhaUsuario: this.state.Senha,
            Telefone: this.state.Telefone,
            Cpf: this.state.CPF,
            DataDeNascimento: this.state.DataNascimento,
            TipoUsuario: this.state.TipoUsuario
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
    atalizarTipoUsuario = (event) => {
        this.setState({TipoUsuario: event.target.value})
        console.log(this.state)
    }

    render() {
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
                        <img src={imgBackGround} alt=""/>
                    </div>
                    <div>
                        <form action="">
                            <input type="text" placeholder="Nome" onInput={this.atualizarNome}></input>
                            <input type="text" placeholder="Email" onInput={this.atualizarEmail}></input>
                            <input type="password" placeholder="Senha" onInput={this.atualizarSenha}></input>
                            <input type="text" placeholder="Telefone" onInput={this.atualizarTelefone}></input>
                            <input type="text" placeholder="CPF" onInput={this.atualizarCPF}></input>
                            <input type="text" placeholder="Data de nascimento" onInput={this.atualizarData}></input>
                            <select onInput={this.atalizarTipoUsuario}> 
                                <option selected>Escolha...</option>
                                <option value='1'>Administrador</option>
                                <option value='2'>Cliente</option>
                            </select>
                            <button onClick={this.adicionarItem}>Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CadastrarAdmin