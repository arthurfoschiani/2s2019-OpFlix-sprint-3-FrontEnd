import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class CadastrarLancamento extends Component {

    constructor() {
        super();
        this.state = {
            nomeMidia: '',
            sinopse: '',
            tempoDuracao: '',
            dataLancamento: '',
            descricao: '',
            tipoMidia1: [],
            categoria: [],
            diretor1: [],
            plataforma: [],
            plataformaSelecionada: '',
            categoriaSelecionado: '',
            tipoMidiaSelecionado: '',
            diretorSelecionado: ''
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/api/categorias', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')  
            }})
            .then(data => {
                this.setState({ categoria: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });
        Axios.get('http://localhost:5000/api/plataformas', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')  
            }})
            .then(data => {
                this.setState({ plataforma: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    adicionarItem = (event) => {
        event.preventDefault();
        console.log('state', this.state);
        Axios.post('http://localhost:5000/api/lancamentos', {
            nomeMidia: this.state.nomeMidia,
            sinopse: this.state.sinopse,
            tempoDuracao: this.state.tempoDuracao,
            dataLancamento: this.state.dataLancamento,
            descricao: this.state.descricao,
            idTipoMidia: this.state.tipoMidiaSelecionado,
            idCategoria: this.state.categoriaSelecionada,
            idDiretor: this.state.diretorSelecionado,
            idPlataforma: this.state.plataformaSelecionada
        }, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
            }
        })
            .then(response => { console.log(response) })
            .catch(erro => {
                this.setState({ erro: "Não foi possível cadastrar" });
                console.log('error', erro);
            });
    }

    atualizarNome = (event) => {
        this.setState({ nomeMidia: event.target.value })
        console.log(this.state);
    }
    atualizarSinopse = (event) => {
        this.setState({ sinopse: event.target.value })
        console.log(this.state);
    }
    atualizarTempoDuração = (event) => {
        this.setState({ tempoDuracao: event.target.value })
        console.log(this.state);
    }
    atualizarDataLancamento = (event) => {
        this.setState({ dataLancamento: event.target.value })
        console.log(this.state);
    }
    atualizarDescricao = (event) => {
        this.setState({ descricao: event.target.value })
        console.log(this.state);
    }
    atualizarTipoMidia = (event) => {
        this.setState({ tipoMidiaSelecionado: event.target.value })
        console.log(this.state);
    }
    atalizarCategoria = (event) => {
        this.setState({ categoriaSelecionada: event.target.value })
        console.log(this.state)
    }
    atalizarDiretor = (event) => {
        this.setState({ diretorSelecionado: event.target.value })
        console.log(this.state)
    }
    atalizarPlataforma = (event) => {
        this.setState({plataformaSelecionada: event.target.value})
        console.log(event.target.value)
    }

    render() {
        return (
            <div>
                <h1>Cadastrar Lançamento</h1>
                <form action="">
                    <input type="text" placeholder="Titulo" onInput={this.atualizarNome}></input>
                    <input type="text" placeholder="Sinopse" onInput={this.atualizarSinopse}></input>
                    <input type="text" placeholder="Tempo de duração" onInput={this.atualizarTempoDuração}></input>
                    <input type="text" placeholder="Data de lançamento" onChange={this.atualizarDataLancamento} ></input>
                    <input type="text" placeholder="Descrição" onInput={this.atualizarDescricao}></input>
                    <select onInput={this.atalizarDiretor} values={this.state.diretorSelecionado}>
                        <option selected>Diretor...</option>
                        <option value='1'>David Crane</option>
                        <option value='2'>George Lucas</option>
                        <option value='3'>Adam Horowitz</option>
                    </select>
                    <select onInput={this.atualizarTipoMidia} values={this.state.tipoMidiaSelecionado}>
                        <option selected>Tipo da mídia...</option>
                        <option value='1'>Série</option>
                        <option value='2'>Filme</option>
                        <option value='3'>Anime</option>
                        <option value='4'>Desenho</option>
                    </select>
                    <select onInput={this.atalizarCategoria} value={this.state.categoriaSelecionada}>
                        <option selected>Categoria...</option>
                        {this.state.categoria.map(element => {
                            return (
                                <option value={element.idCategoria}>{element.categoria1}</option>
                            )
                        })}
                    </select>
                    <select onChange={this.atalizarPlataforma} value={this.state.plataformaSelecionada}>
                        <option selected>Plataforma...</option>

                        {this.state.plataforma.map(element => {
                            return (
                                <option value={element.idPlataforma}>{element.plataforma1}</option>
                            )
                        })}
                    </select>
                    <button onClick={this.adicionarItem}>Cadastrar</button>
                </form>
            </div>
        );
    }
}
export default CadastrarLancamento;