import React,{Component} from 'react';
import logo from '../../Assets/img/Logo.jpg';
import {Link} from 'react-router-dom';

class NaoEncontrado extends Component{
    render(){
        return(
            <div id='PagErro'>
                <nav>
                    <ul>
                        <li><img src={logo} /></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </nav>
                <div id='junto'>
                    <p id='erro'>404</p>
                    <p id='erro2'>Paginá não encontrada!</p>
                </div>
            </div>
        )
    }
}

export default NaoEncontrado;