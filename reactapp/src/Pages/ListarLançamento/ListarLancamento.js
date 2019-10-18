import React,{Component} from 'react';
import Axios from 'axios';
import logo from '../../Assets/img/Logo.jpg';

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

    render() {
        return(
            <div>
                <nav>
                    <ul>
                        <li><img src={logo} alt=""/></li>
                        <li><a href="#">DashBoard</a></li>
                        <li><a href="#" id="lancamento">Lançamento</a></li>
                    </ul>
                </nav>
                <div className="lanca">
                    <form action="GET">
                        <input type="text" value="" placeholder="Buscar"></input>
                        <button>Filtrar</button>
                    </form>
                    {this.state.lista.map(element => {
                        return(
                            <div id="infos">
                                <ul>
                                    <li>Título: {element.nomeMidia}</li>
                                    <li>Tipo da mídia: {element.idTipoMidiaNavigation.tipoMidia1}</li>
                                    <li>Sinopse: {element.sinopse}</li>
                                    <li>Tempo de duração: {element.tempoDuracao}</li>
                                    <li>Categoria: {element.idCategoriaNavigation.categoria1}</li>
                                    <li>Diretor: {element.idDiretorNavigation.diretor1}</li>
                                    <li>Data de lançamento: {element.dataLancamento}</li>
                                    <li>Plataforma: {element.idPlataformaNavigation.plataforma1}</li>
                                    <li>Descrição: {element.descricao}</li>
                                </ul>
                                <button>Favoritar</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default ListarLancamento;