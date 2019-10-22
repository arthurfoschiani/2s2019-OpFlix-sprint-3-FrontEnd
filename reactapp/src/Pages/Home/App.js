import React from 'react';

import '../../Assets/css/Home.css';
import Logo from '../../Assets/img/Logo.jpg';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
        <nav>
            <ul>
                <li><img src={Logo} /></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
        <div id="banner">
            <p>
                Confira já os próximos lançamento
                e suas plataformas
            </p>
        </div>
    </div>
  );
}

export default App;
