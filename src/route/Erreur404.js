import React from 'react'
import '../css/Erreur.css';
import {Link} from 'react-router-dom';

export default function Erreur404() {
  return (
    <>
      <div className='erreur'>
        <h1>404</h1>
        <p className='description'>Oups! La page que vous demandez n'existe pas.</p>
        <Link className='link' to='/'>Retourner sur la page d'accueil</Link>
      </div>
    </>
  )
}
