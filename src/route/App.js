import React from 'react';
import '../css/App.css';
import {Link, Outlet, useLocation } from 'react-router-dom';

function Image(props){
  return <img src={props.src} alt=''/>
}

function Lien(props){
  if(useLocation().pathname === props.to){
    return <Link className='link' to={props.to}>{props.text}</Link>
  }else{
    return <Link to={props.to}>{props.text}</Link>
  }
}

function App() {
  return (
    <>
      <header className='taille-content'>
        <Image src='logo'/>
        <nav><Lien to='/' text='Accueil'/><Lien to='/A_Propos' text='A Propos'/></nav>
      </header>
      <div className='taille-content'>
        <Outlet/>
      </div>
      <footer>
        <div>
          <Image src='logo'/>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default App;
