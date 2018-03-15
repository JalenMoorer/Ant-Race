import React from 'react';

const Ant = (props) => {

  const { number, name, length, weight, color, likelihood } = props;

  return (
      <div className="card border-dark mb-3" style={{maxWidth: "18rem"}}>
        <div className="card-header">Ant # {number} </div>
        <div className="card-body text-dark">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">length: {length}</p>
          <p className="card-text">weight: {weight}</p>
          <p className="card-text">color: {color}</p>
          <p className="card-text">likelihood: {likelihood} </p>
        </div>
    </div>
  );
}

export default Ant;
