import React from 'react';
import expertsData from '../data';

function Events() {
  return (
    <div className='container mt-4'>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">THÈME</th>
              <th scope="col">DATE DE DEBUT</th>
              <th scope="col">DATE DE FIN</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col" className="text-end">COUT JOURNALIER</th>
              <th scope="col" className="text-end">DURÉE (JOURS)</th>
              <th scope="col" className="text-end">COUT TOTAL EVENT</th>
            </tr>
          </thead>
          <tbody>
            {expertsData.map((expert) => (
              expert.événements.map((event, index) => (
                <tr key={index}>
                  <td>{event.thème}</td>
                  <td>{event.date_debut}</td>
                  <td>{event.date_fin}</td>
                  <td>{event.description}</td>
                  <td className="text-end">{event.cout_journalier}</td>
                  <td className="text-end">{event.durée}</td>
                  <td className="text-end">{event.durée * event.cout_journalier}</td>
                </tr>
              ))
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="6" className="text-end"><strong>Total</strong></td>
              <td className="text-end">
                {expertsData.reduce((total, expert) => {
                  return total + expert.événements.reduce((eventTotal, event) => {
                    return eventTotal + (event.durée * event.cout_journalier);
                  }, 0);
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Events;
