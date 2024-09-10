import React, { useState } from 'react';
import BirthDateForm from './components/BirthDateForm';
import PythagorasTable from './components/PythagorasTable';
import './styles.css';

function App() {
  const [pythagorasData, setPythagorasData] = useState(null);

  const handleBirthDateSubmit = (birthdate) => {
    const pythagorasNumbers = calculatePythagorasNumbers(birthdate);
    setPythagorasData(pythagorasNumbers);
  };

  const calculatePythagorasNumbers = (birthdate) => {
    let dateArray = [];
    let secondNumber = [];
    let matrix = [];
    const digits = birthdate.split('.').map(part => part.split('')).flat().map(Number);

    // Set dateArray
    dateArray = digits;

    // Calculate additional numbers (secondNumber)
    secondNumber[0] = firstSecondNumber(dateArray);
    secondNumber[1] = secondSecondNumber(secondNumber[0]);
    secondNumber[2] = thirdSecondNumber(secondNumber[0], dateArray);
    secondNumber[3] = secondSecondNumber(secondNumber[2]);

    // Merge all numbers into fullNumbers
    const fullNumbers = [...dateArray, ...secondNumber];

    // Convert to individual integers (for matrix)
    const fullNumbersInt = fullNumbers.map(n => n.toString()).flatMap(n => n.split('').map(Number));

    // Generate the matrix
    matrix = getMatrix(fullNumbersInt);

    // Calculate destiny number
    const destiny = destinyNumber(secondNumber);

    return {
      birthdate,
      secondNumber,
      destiny,
      matrix
    };
  };

  const firstSecondNumber = (dateArray) => {
    return dateArray.reduce((acc, num) => acc + num, 0);
  };

  const secondSecondNumber = (number) => {
    return number.toString().split('').reduce((acc, num) => acc + Number(num), 0);
  };

  const thirdSecondNumber = (firstSecondNumber, dateArray) => {
    return Math.abs(firstSecondNumber - 2 * dateArray[0]);
  };

  const getMatrix = (fullNumbersInt) => {
    const matrix = Array(9).fill('');
    const counts = Array(9).fill(0);

    fullNumbersInt.forEach(num => {
      if (num >= 1 && num <= 9) {
        matrix[num - 1] += num;
        counts[num - 1]++;
      }
    });

    if (matrix[0] === '') matrix[0] = '0'; // Fill "Empty" positions with 0
    return [
      ...matrix,
      counts[2] + counts[4] + counts[6], // Дополнительный ряд для расчетов
      counts[3] + counts[4] + counts[5],
      counts[1] + counts[4] + counts[7],
      counts[0] + counts[3] + counts[6],
      counts[2] + counts[5] + counts[8]
    ];
  };

  const destinyNumber = (secondNumber) => {
    const secondSecond = secondSecondNumber(secondNumber[1]);
    return secondNumber[1] === 11 ? 11 : secondSecond;
  };

  return (
    <div className="container">
      <h1>Калькулятор Квадрата Пифагора</h1>
      <BirthDateForm onSubmit={handleBirthDateSubmit} />
      {pythagorasData && (
        <>
          <div className="result-section">
            <p><strong>Дата рождения:</strong> {pythagorasData.birthdate}</p>
            <p><strong>Дополнительные числа:</strong> {pythagorasData.secondNumber.join(', ')}</p>
            <p><strong>Число судьбы:</strong> {pythagorasData.destiny}</p>
          </div>
          <PythagorasTable matrix={pythagorasData.matrix} />
        </>
      )}
    </div>
  );
}

export default App;


