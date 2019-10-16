import React from 'react';

import '../../Assets/css/Home.css';
import logo from '../../Assets/img/Logo.jpg';

function App() {
  return (
    <div>
        <nav>
            <ul>
                <li><img src={logo} alt=""/></li>
                <li><a href="#" id="login">Login</a></li>
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
