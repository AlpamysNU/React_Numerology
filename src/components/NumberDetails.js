import React from 'react';

function NumberDetails({ character }) {
  return (
    <div className="number-details">
      <h3>Характеристики</h3>
      <p>Здоровье: {character.health}</p>
      <p>Удача: {character.luck}</p>
      <p>Энергия: {character.energy}</p>
      <p>Память: {character.memory}</p>
    </div>
  );
}

export default NumberDetails;
