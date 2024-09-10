// utils/calculatePythagoras.js
export const calculatePythagoras = (birthDate) => {
    const [day, month, year] = birthDate.split('.').map(Number);
    
    const digits = [...`${day}${month}${year}`].map(Number);
  
    const destinyNumber = digits.reduce((acc, digit) => acc + digit, 0);
    const additionalNumbers = digits.map(digit => digit * 2 % 9);
  
    const pythagorasSquare = {
      destinyNumber,
      additionalNumbers,
      traits: {
        character: digits.filter(num => num === 1).length,
        health: digits.filter(num => num === 4).length,
        luck: digits.filter(num => num === 6).length,
        energy: digits.filter(num => num === 2).length,
        logic: digits.filter(num => num === 5).length,
        duty: digits.filter(num => num === 8).length,
      }
    };
  
    return pythagorasSquare;
  };
  