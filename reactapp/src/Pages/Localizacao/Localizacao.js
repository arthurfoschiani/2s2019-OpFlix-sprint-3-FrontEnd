import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Axios from 'axios';
import logo from '../../Assets/img/Logo.jpg';
import PinIcon from '../../Assets/img/icon.png';
import {Link} from 'react-router-dom';

const Pin = ({ lancamento }) =>
  <div className="pin">
    <img src={PinIcon} alt="Pin" className="pin-icon" />
    <p className="TituloPin">{lancamento.titulo}</p>
  </div>


class Localizacao extends Component {

  constructor() {
    super();
    this.state = {
      carregarMapa: false,
      localizacoes: []
    };
  }

  componentDidMount() {
    this.carregarLocalizacoesLancamento();
    setTimeout(console.log(this.state.localizacoes), 1000)
  }

  carregarLocalizacoesLancamento() {
    Axios.get('http://192.168.3.14:5000/api/localizacoes')
        .then(response => {
            this.setState({ localizacoes: response.data });
            console.log(this.state.localizacoes)
        })
        .then(this.setState({ carregarMapa: true }));
  }

  createMapOptions(maps) {
    return {
      zoomControlOptions: {
        position: maps.ControlOptions.TOP_LEFT,
        style: maps.zoomControlStyle.SMALL
      },
      mapTypeControlOptions: {
        position: maps.ControlOptions.TOP_RIGHT
      },
    }
  }

    Logout = (event) => {
        localStorage.removeItem("usuario-opflix");
        this.props.history.push('/');
    }

  render() {
    console.log(this.state.localizacoes)
    return (
      <div>
        < script defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBSzVh-P1he1vUWXeShZ1Q2M1sD8NGqONs&callback=initMap"
  type="text/java"></ script>
        <nav>
            <ul>
                <li><img src={logo} alt=""/></li>
                <li><Link to='/dashboard'>DashBoard</Link></li>
                <li><Link onClick={this.Logout} to='/'>Sair</Link></li>
            </ul>
        </nav>
        <h2>Localização</h2>

        {this.state.carregarMapa === false ? <span /> :
          <div style={{
            height: '80vh',
            width: '100%',
          }}>
            <GoogleMapReact
              defaultCenter={{ lat: -23.5364936, lng: -46.6483357 }}
              defaultZoom={12}
            >

              {this.state.localizacoes.map(item => {
                return (
                  <Pin
                    key={item.lancamento.nomeMidia}
                    lat={item.latitude}
                    lng={item.longitude}
                    lancamento={item.lancamento}
                  />
                )
              })}
            </GoogleMapReact>
          </div>
        }
      </div>
    );
  }
}

export default Localizacao;
