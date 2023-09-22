import React from 'react'
import {Link} from 'react-router-dom';

export default function Erreur404() {
  return (
    <>
      <div>
        <h1>Erreur 404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/'>Retour à l'accueil</Link>
      </div>
    </>
  )
}
