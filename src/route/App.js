import React, { useState, useEffect } from 'react';
import '../css/App.css';
import { Outlet } from 'react-router-dom';
import Image from '../Composant/Image';
import Lien from '../Composant/Lien';

function Header(){
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Fonction pour déterminer la largeur de l'écran et choisir le lien de l'image en conséquence
    const updateImageSrc = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        setImageSrc(`../images/logo_color.svg`);
      } else {
        setImageSrc(`../images/logo_color_mobil.svg`);
      }
    };

    // Appeler la fonction lors du chargement initial et lorsque la fenêtre est redimensionnée
    window.addEventListener('resize', updateImageSrc);
    updateImageSrc();

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('resize', updateImageSrc);
    };
  }, []);
  return  <header className='page-header taille-content'>
            <Image src={imageSrc} alt='Logo'/>
            <nav><Lien to='/' text='Accueil'/><Lien to='/A_Propos' text='A Propos'/></nav>
          </header>
}

function Footer(){
  return  <footer className='page-footer'>
            <div>
              <Image className='img_footer' src='../images/logo_white.svg' alt='Logo'/>
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
