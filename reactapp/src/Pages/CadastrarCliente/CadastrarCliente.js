import React,{Component} from 'react';
import Axios from 'axios';
import logo from '../../Assets/img/Logo.jpg';
import imgBackGround from '../../Assets/img/Retângulo 3.png';

class CadastrarCliente extends Component{

    constructor(){
        super();
        this.state = {
            Lista: [],
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
        Axios.post('http://localhost:5000/api/usuarios/CadastrarComum'), {
            NomeUsuario: this.state.Nome, 
            EmailUsuario: this.state.Email,
            SenhaUsuario: this.state.Senha,
            Telefone: this.state.Telefone,
            Cpf: this.state.CPF,
            DataDeNascimento: this.state.DataNascimento
        }
        .then(response =>{console.log(response)})
        .catch(erro => { 
            this.setState({ erro: "Usuário ou senha inválidos"});
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
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
                <div>
                    <div>
                        <img src={imgBackGround} alt=""/>
                    </div>
                    <div>
                        <form action="">
                            <input type="text" placeholder="Nome" value={this.state.Nome} onInput={this.atualizarNome}></input>
                            <input type="text" placeholder="Email" value={this.state.Email} onInput={this.atualizarEmail}></input>
                            <input type="text" placeholder="Senha" value={this.state.Senha} onInput={this.atualizarSenha}></input>
                            <input type="text" placeholder="Telefone" value={this.state.Telefone} onInput={this.atualizarTelefone}></input>
                            <input type="text" placeholder="CPF" value={this.state.CPF} onInput={this.atualizarCPF}></input>
                            <input type="text" placeholder="Data de nascimento" value={this.state.DataNascimento} onInput={this.atualizarData}></input>
                            <button onClick={this.adicionarItem}>Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CadastrarCliente