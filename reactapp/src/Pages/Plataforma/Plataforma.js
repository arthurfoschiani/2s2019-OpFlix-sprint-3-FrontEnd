import React,{Component} from 'react';

import logo from '../../Assets/img/Logo.jpg';
import '../../Assets/css/style.css';
import {Link} from 'react-router-dom';

class Plataforma extends Component{

    constructor(){
        super();
        this.state = {
            lista: [],
            plataforma1: ''
        };
    }

    componentDidMount(){
        this.listaAtualizada();
    }

    listaAtualizada = () => {
        fetch('http://192.168.3.14:5000/api/plataformas', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("usuario-opflix")
            }
        })
            .then(response => response.json())
            .then(data => this.setState({ lista: data}));
    }

    adicionaItem = (event) => {
        event.preventDefault();
        console.log(this.state.plataforma1);
        fetch('http://192.168.3.14:5000/api/plataformas',{
            method: "POST",
            body: JSON.stringify({ plataforma1: this.state.plataforma1 }),
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("usuario-opflix"),
                "Content-Type": "application/json"
            }
        })
        .then(this.listaAtualizada)
        .catch(error => console.log(error))
    }

    atualizarNome = (event) =>{
        this.setState({plataforma1: event.target.value})
        console.log(this.state);
    }

    Logout = (event) => {
        localStorage.removeItem("usuario-opflix");
        this.props.history.push('/');
    }

    render(){
        return(
        <div id='Plataforma'>
            <nav>
                <ul>
                    <li><img src={logo} alt=""/></li>
                    <li><Link to='/dashboard'>DashBoard</Link></li>
                    <li><Link onClick={this.Logout} to='/'>Sair</Link></li>
                </ul>
            </nav>
            <h2>Cadastrar Plataforma</h2>
            <form action="GET">
                <input type="text" value="" placeholder="Cadastrar" value={this.state.nome} onInput={this.atualizarNome}></input>
                <button onClick={this.adicionaItem}>Cadastrar</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Plataforma</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.lista.map(element =>{
                        return(
                            <tr key={element.idPlataforma}>
                                <td>{element.idPlataforma}</td>
                                <td>{element.plataforma1}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        );
    }
}

export default Plataforma;