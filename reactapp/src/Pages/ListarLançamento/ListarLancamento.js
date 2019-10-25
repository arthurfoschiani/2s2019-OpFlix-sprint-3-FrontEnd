import React,{Component} from 'react';
import Axios from 'axios';
import logo from '../../Assets/img/Logo.jpg';
import {Link} from 'react-router-dom';

class ListarLancamento extends Component{

    constructor(){
        super();
        this.state = {
            lista: []
        };
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/api/lancamentos',{
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

    render() {
        return(
            <div id='ListarLancamento'>
                <nav>
                    <ul>
                        <li><img src={logo} alt=""/></li>
                        <li><Link to='/dashboard'>DashBoard</Link></li>
                        <li><Link onClick={this.Logout} to='/'>Sair</Link></li>
                    </ul>
                </nav>
                <h2 >Lançamentos</h2>
                <div className="lanca">
                    {this.state.lista.map(element => {
                        return(
                            <div id="infos">
                                <ul>
                                    <li>Título: {element.nomeMidia}</li>
                                    <li>Tipo da mídia: {element.idTipoMidiaNavigation != undefined ? element.idTipoMidiaNavigation.tipoMidia1 : 'Não tem Tipo.'}</li>
                                    <li>Sinopse: {element.sinopse}</li>
                                    <li>Tempo de duração: {element.tempoDuracao}</li>
                                    <li>Categoria: {element.idCategoriaNavigation != undefined ? element.idCategoriaNavigation.categoria1 : 'Não tem categoria.'}</li>
                                    <li>Diretor: {element.idDiretorNavigation != undefined ? element.idDiretorNavigation.diretor1 : 'Não tem diretor.'}</li>
                                    <li>Data de lançamento: {element.dataLancamento}</li>
                                    <li>Plataforma: {element.idPlataformaNavigation != undefined ? element.idPlataformaNavigation.plataforma1 : 'Não tem plataforma.'}</li>
                                    <li>Descrição: {element.descricao}</li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default ListarLancamento;