import React, { useState } from 'react';
import InputMask from 'react-input-mask';

function BirthDateForm({ onSubmit }) {
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidDate(birthdate)) {
      alert("Введите корректную дату в формате ДД.ММ.ГГГГ");
      return;
    }
    onSubmit(birthdate);
  };

  // Проверка правильности формата даты
  const isValidDate = (date) => {
    const regex = /^\d{2}\.\d{2}\.\d{4}$/;
    return regex.test(date);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputMask
        mask="99.99.9999"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        placeholder="Введите дату рождения (ДДММГГГГ)"
        className="input-field"
      />
      <button type="submit" className="submit-btn">Рассчитать</button>
    </form>
  );
}

export default BirthDateForm;
