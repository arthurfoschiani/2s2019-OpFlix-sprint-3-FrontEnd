import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import logo from '../../Assets/img/Logo.jpg';
import {Link} from 'react-router-dom';

class Localizacoes extends Component {

    constructor() {
        super();
        this.state = {
            Localizacoes: [],
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
    }

    carregarLocalizacoes = () => {
        fetch("http://192.168.3.14:5000/api/localizacoes", {
          headers: {
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix')
          }
        })
            .then(response => response.json())
            .then(data => this.setState({ Localizacoes: data }))
            .catch(error => console.log(error));
    }

    pin = () => {
        let pin = [];
        this.state.Localizacoes.map(element => {
            pin.push(
                <Marker title={element.lancamento.nomeMidia} position={{ lat: element.latitude, lng: element.longitude }}/>
            )
        })
        return pin;
    }

    componentWillMount() {
        this.carregarLocalizacoes();
    }

    Logout = (event) => {
      localStorage.removeItem("usuario-opflix");
      this.props.history.push('/');
    }

    render() {
        return (
            <body style={{ width: '100%', height: '100vh'}}>
                <nav>
                  <ul>
                      <li><img src={logo} alt=""/></li>
                      <li><Link style={{fontSize: "2em"}} to='/localizacao'>Localização</Link></li>
                      <li><Link to='/dashboard'>DashBoard</Link></li>
                      <li><Link onClick={this.Logout} to='/'>Sair</Link></li>
                  </ul>
                </nav>
                <Map google={this.props.google}
                    className={'map'}
                    zoom={12}
                    initialCenter={{
                        lat: -23.5299047,
                        lng: -46.753078
                    }}
                >
                    {this.pin()}
                </Map>
            </body>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBSzVh-P1he1vUWXeShZ1Q2M1sD8NGqONs")
})(Localizacoes)