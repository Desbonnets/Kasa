import React from 'react'
import { useParams } from 'react-router-dom'

export default function Fiche_logement() {
    const { id } = useParams();
  return (
    <div>Fiche logement numéro : { id }</div>
  )
}
