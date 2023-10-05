import React from 'react';
import '../css/App.css';
import { Outlet } from 'react-router-dom';
import {Image, Lien} from '../Composant/Component.js';

function Header(){
  return  <header className='page-header taille-content'>
            <Image src='images/logo_color.svg' alt='Logo'/>
            <nav><Lien to='/' text='Accueil'/><Lien to='/A_Propos' text='A Propos'/></nav>
          </header>
}

function Footer(){
  return  <footer className='page-footer'>
            <div>
              <Image className='img_footer' src='images/logo_white.svg' alt='Logo'/>
              <p>© 2020 Kasa. All rights reserved</p>
            </div>
          </footer>
}

function App() {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <div className='page-body taille-content'>
          <Outlet/>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
