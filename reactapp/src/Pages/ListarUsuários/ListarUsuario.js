import React,{Component} from 'react';
import Axios from 'axios';
import logo from '../../Assets/img/Logo.jpg';
import {Link} from 'react-router-dom';

class ListarUsuario extends Component{
    
    constructor(){
        super();
        this.state = {
            lista: []
        };
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/api/usuarios',{
            headers: {
                Authorization: 'Bearer '+localStorage.getItem('usuario-opflix')
            }
        })
            .then(data => {
                this.setState({lista: data.data});
                console.log(this.state)
            })
            .catch(erro => {
                console.log(erro);
            });
        }

        Logout = (event) => {
            localStorage.removeItem("usuario-opflix");
            this.props.history.push('/');
        }

    render(){
        return(
            <div id='Usuarios'>
                <nav>
                    <ul>
                        <li><img src={logo} alt=""/></li>
                        <li><Link to='/dashboard'>DashBoard</Link></li>
                        <li><Link onClick={this.Logout} to='/'>Sair</Link></li>
                    </ul>
                </nav>
                <h2>Usuários</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>CPF</th>
                                <th>Data de nascimento</th>
                                <th>Tipo de usuário</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.lista.map(element => {
                                return(
                                    <tr>
                                        <td>{element.idUsuario}</td>
                                        <td>{element.nomeUsuario}</td>
                                        <td>{element.emailUsuario}</td>
                                        <td>{element.telefone}</td>
                                        <td>{element.cpf}</td>
                                        <td>{element.dataDeNascimento}</td>
                                        <td>{element.tipoUsuarioNavigation.tipoUsuario1}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListarUsuario