import React from 'react';
import '../App.css';
import {Link, Outlet} from 'react-router-dom';

function Image(props){
  return <img src={props.src} alt=''/>
}

function App() {
  return (
    <div>
      <header>
        <Image src='logo'/>
        <nav><Link>Accueil</Link><Link to='/A_Propos'>A Propos</Link></nav>
      </header>
      <div>
        <Outlet/>
      </div>
      <footer>
        <div>
          <Image src='logo'/>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
