import React, { useState } from 'react';

function Formulaire() {
  const [theme, setThem] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [cout, setCout] = useState('');
  const [expert, setExpert] = useState('');
  const [showDetailsFlag, setShowDetailsFlag] = useState(false); 

  const calculateDuration = () => {
    const startDate = new Date(dateDebut);
    const endDate = new Date(dateFin);
    const diffInMilliseconds = endDate - startDate;
    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
    return Math.abs(diffInDays);
  };

  const showDetails = () => {
    const duration = calculateDuration();
    const totalCost = duration * cout;

    return (
      <div className="mt-3">
        <h5>Details:</h5>
        <p>
          L’expert : {expert} assurera le thème : {theme}, avec un coût journalier : {cout} DH,
          pour une durée de : {duration} jours, soit un coût total de {totalCost} DH.
        </p>
      </div>
    );
  };

  const handleConfirmClick = () => {
    setShowDetailsFlag(true);  // Set the flag to true when "Confirmer" is clicked
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Formulaire</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">Thème</label>
                <input
                  type="text"
                  className="form-control"
                  value={theme}
                  onChange={(e) => setThem(e.target.value)}
                  placeholder="Entrez le thème"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Date de début</label>
                <input
                  type="date"
                  className="form-control"
                  value={dateDebut}
                  onChange={(e) => setDateDebut(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Date de fin</label>
                <input
                  type="date"
                  className="form-control"
                  value={dateFin}
                  onChange={(e) => setDateFin(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Coût journalier</label>
                <input
                  type="number"
                  className="form-control"
                  value={cout}
                  onChange={(e) => setCout(e.target.value)}
                  placeholder="Entrez le coût journalier"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Expert</label>
                <input
                  type="text"
                  className="form-control"
                  value={expert}
                  onChange={(e) => setExpert(e.target.value)}
                  placeholder="Nom de l'expert"
                />
              </div>

              <div className="d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleConfirmClick}  
                >
                  Confirmer
                </button>
              </div>
            </form>

            {showDetailsFlag && showDetails()} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;
