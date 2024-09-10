import React from 'react';

// Функция для расчета параметров таблицы Пифагора
function PythagorasTable({ matrix }) {
  const charakter = matrix[0] || 'Пусто'; // Характер (1)
  const zdorovie = matrix[3] || 'Пусто';  // Здоровье (4)
  const udacha = matrix[6] || 'Пусто';    // Удача (7)

  const energiya = matrix[1] || 'Пусто';  // Энергия (2)
  const logika = matrix[4] || 'Пусто';    // Логика (5)
  const dolg = matrix[7] || 'Пусто';      // Долг (8)

  const interes = matrix[2] || 'Пусто';   // Интерес (3)
  const trud = matrix[5] || 'Пусто';      // Труд (6)
  const pamyat = matrix[8] || 'Пусто';    // Память (9)

  return (
    <div className="square-table">
      <h2>Ваш Квадрат Пифагора</h2>
      <table>
        <thead>
          <tr>
            <th>Характер / Cила воли</th>
            <th>Здоровье / красота</th>
            <th>Удача</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{charakter}</td>
            <td>{zdorovie}</td>
            <td>{udacha}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Энергетика / Харизма</th>
            <th>Логика / Интуиция</th>
            <th>Чувство долга</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{energiya}</td>
            <td>{logika}</td>
            <td>{dolg}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Познание</th>
            <th>Трудолюбие</th>
            <th>Память / Ум</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{interes}</td>
            <td>{trud}</td>
            <td>{pamyat}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PythagorasTable;
