import React from 'react'
import expertsData from '../data'

function Experts() {
  return(
    <div className='container mt-4'>
      <ul>
        {expertsData.map(expert => (
          <>
            <li key={expert.id}>{expert.nom_complet}</li>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">THÈME</th>
                  <th scope="col">DATE DE DEBUT</th>
                  <th scope="col">DATE DE FIN</th>
                  <th scope="col">DESCRIPTION</th>
                  <th scope="col">COUT JOURNALISER</th>
                  <th scope="col">DURÉE (JOURS)</th>
                  <th scope="col">COUT TOTAL EVENT</th>
                </tr>
              </thead>
              <tbody>
              {
                expert.événements.map(event => (
                  <tr>
                    <td>{event.thème}</td>
                    <td>{event.date_debut}</td>
                    <td>{event.date_fin}</td>
                    <td>{event.description}</td>
                    <td>{event.cout_journalier}</td>
                    <td>{event.durée}</td>
                    <td>{event.durée * event.cout_journalier}</td>
                  </tr>
                  ))
              }
              <tr>{expert.événements.reduce((acc, event) => acc + (event.durée * event.cout_journalier), 0)}</tr>
              </tbody>
            </table>
          </>
        ))}
      </ul>
    </div>
  )
}

export default Experts