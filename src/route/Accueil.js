import React from 'react'
import {Link} from 'react-router-dom';

export default function Accueil() {
  return (
    <>
      <div>Accueil</div>
      <Link to='/Fiche_Logement/2'>Fiche du logement numéro 2</Link>
    </>
  )
}
