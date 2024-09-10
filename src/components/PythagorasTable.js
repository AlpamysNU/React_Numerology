// import React from 'react';

// // Функция для расчета параметров таблицы Пифагора
// function PythagorasTable({ matrix }) {
//   const charakter = matrix[0] || 'Пусто'; // Характер (1)
//   const zdorovie = matrix[3] || 'Пусто';  // Здоровье (4)
//   const udacha = matrix[6] || 'Пусто';    // Удача (7)

//   const energiya = matrix[1] || 'Пусто';  // Энергия (2)
//   const logika = matrix[4] || 'Пусто';    // Логика (5)
//   const dolg = matrix[7] || 'Пусто';      // Долг (8)

//   const interes = matrix[2] || 'Пусто';   // Интерес (3)
//   const trud = matrix[5] || 'Пусто';      // Труд (6)
//   const pamyat = matrix[8] || 'Пусто';    // Память (9)

//   return (
//     <div className="square-table">
//       <h2>Ваш Квадрат Пифагора</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Характер / Cила воли</th>
//             <th>Здоровье / красота</th>
//             <th>Удача</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{charakter}</td>
//             <td>{zdorovie}</td>
//             <td>{udacha}</td>
//           </tr>
//         </tbody>
//         <thead>
//           <tr>
//             <th>Энергетика / Харизма</th>
//             <th>Логика / Интуиция</th>
//             <th>Чувство долга</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{energiya}</td>
//             <td>{logika}</td>
//             <td>{dolg}</td>
//           </tr>
//         </tbody>
//         <thead>
//           <tr>
//             <th>Познание</th>
//             <th>Трудолюбие</th>
//             <th>Память / Ум</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{interes}</td>
//             <td>{trud}</td>
//             <td>{pamyat}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default PythagorasTable;









import React from 'react';

// Функция для подсчета количества цифр по строкам, столбцам и диагоналям
function calcFromMatrix(matrix, indexes) {
  return indexes.reduce((sum, index) => sum + (matrix[index]?.length || 0), 0);
}

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

  // Дополнительные параметры
  const temperament = calcFromMatrix(matrix, [2, 4, 6]) || 'Пусто'; // Диагональ 3-5-7
  const dukhovnost = calcFromMatrix(matrix, [0, 4, 8]) || 'Пусто'; // Диагональ 1-5-9
  const semya = calcFromMatrix(matrix, [1, 4, 7]) || 'Пусто'; // Строка 2-5-8
  const byt = calcFromMatrix(matrix, [3, 4, 5]) || 'Пусто'; // Столбец 4-5-6
  const tsel = calcFromMatrix(matrix, [0, 3, 6]) || 'Пусто'; // Строка 1-4-7
  const talant = calcFromMatrix(matrix, [6, 7, 8]) || 'Пусто'; // Столбец 7-8-9
  const privychki = calcFromMatrix(matrix, [2, 5, 8]) || 'Пусто'; // Строка 3-6-9
  const samoocenka = calcFromMatrix(matrix, [0, 1, 2]) || 'Пусто'; // Столбец 1-2-3

  return (
    <div className="pythagoras-container">
      {/* Таблица Пифагора */}
      <div className="square-table">
        {/* <h2>Квадрат Пифагора</h2> */}
        <table>
          <thead>
            <tr>
              <th>Характер</th>
              <th>Здоровье</th>
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
              <th>Энергия</th>
              <th>Логика</th>
              <th>Долг</th>
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
              <th>Интерес</th>
              <th>Труд</th>
              <th>Память</th>
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

      {/* Дополнительные параметры в карточках снизу */}
      <div className="additional-parameters">
        <div className="card">Темперамент: <span>{temperament}</span></div>
        <div className="card">Духовность: <span>{dukhovnost}</span></div>
        <div className="card">Семья: <span>{semya}</span></div>
        <div className="card">Быт: <span>{byt}</span></div>
        <div className="card">Целеустремленность: <span>{tsel}</span></div>
        <div className="card">Талант: <span>{talant}</span></div>
        <div className="card">Привычки: <span>{privychki}</span></div>
        <div className="card">Самооценка: <span>{samoocenka}</span></div>
      </div>
    </div>
  );
}

export default PythagorasTable;
