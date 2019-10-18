import React, { Component } from 'react';
import Axios from 'axios';

class CadastrarLancamento extends Component {

    constructor() {
        super();
        this.state = {
            nomeMidia: '',
            sinopse: '',
            tempoDuracao: '',
            dataLancamento: '',
            descricao: '',
            tipoMidia1: '',
            categoria: [],
            diretor: [],
            plataforma: [],
            plataformaSelecionada: '',
            categoriaSelecionado: ''
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/api/categorias')
            .then(data => {
                this.setState({ categoria: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });
        Axios.get('http://localhost:5000/api/plataformas')
            .then(data => {
                this.setState({ plataforma: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    adicionarItem = (event) => {
        event.preventDefault();
        console.log(this.state.li);
        Axios.post('http://localhost:5000/api/usuarios', {
            nomeMidia: this.state.nomeMidia,
            sinopse: this.state.sinopse,
            tempoDuracao: this.state.tempoDuracao,
            dataLancamento: this.state.dataLancamento,
            descricao: this.state.descricao,
            tipoMidia1: this.state.tipoMidia1,
            categoria1: this.state.categoria,
            diretor1: this.state.diretor,
            plataforma1: this.state.plataforma
        })
            .then(response => { console.log(response) })
            .catch(erro => {
                this.setState({ erro: "Não foi possível cadastrar" });
                console.log(erro);
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
        this.setState({ tipoMidia1: event.target.value })
        console.log(this.state);
    }
    atalizarCategoria = (event) => {
        this.setState({ categoriaSelecionada: event.target.value })
        console.log(this.state)
    }
    atalizarDiretor = (event) => {
        this.setState({ diretor: event.target.value })
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
                    <input type="text" placeholder="Data de lançamento" onInput={this.atualizarDataLancamento}></input>
                    <input type="text" placeholder="Descrição" onInput={this.atualizarDescricao}></input>
                    <input type="text" placeholder="Diretor" onInput={this.atalizarDiretor}></input>
                    <select onInput={this.atualizarTipoMidia}>
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