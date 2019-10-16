import React,{Component} from 'react';

import logo from '../../Assets/img/Logo.jpg';

class Categoria extends Component {

    constructor(){
        super();
        this.state = {
            lista: [],
            categoria1: ''
        };
    }

    componentDidMount(){
        this.listaAtualizada();
    }

    listaAtualizada = () => {
        fetch('http://localhost:5000/api/categorias')
            .then(response => response.json())
            .then(data => this.setState({ lista: data}));
    }

    adicionaItem = (event) => {
        event.preventDefault();
        console.log(this.state.categoria1);
        fetch('http://localhost:5000/api/categorias',{
            method: "POST",
            body: JSON.stringify({ categoria1: this.state.categoria1 }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(this.listaAtualizada)
        .catch(error => console.log(error))
    }

    atualizarNome = (event) =>{
        this.setState({categoria1: event.target.value})
        console.log(this.state);
    }

    render () {
        return(
            <div>
                <nav>
                    <ul>
                        <li><img src="img/Logo.jpg" alt="" /></li>
                        <li><a href="#">DashBoard</a></li>
                    </ul>
                </nav>
                <h1>Cadastrar Categoria</h1>
                <form action="GET">
                    <input type="text" value="" placeholder="Cadastrar" value={this.state.nome} onInput={this.atualizarNome}></input>
                    <button onClick={this.adicionaItem}>Cadastrar</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lista.map(element =>{
                            return(
                                <tr key={element.idCategoria}>
                                    <td>{element.idCategoria}</td>
                                    <td>{element.categoria1}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Categoria