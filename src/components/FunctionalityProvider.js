import React, { useState } from 'react';

export const FunctionalityContext = React.createContext();

const FunctionalityProvider = props => {
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');
  const [tempNumber, setTempNumber] = useState('');

  const setNumberValue = num => {
    if ((!number.includes('.') || num !== '.') && number.length < 10) {
      setNumber(`${number + num}`);
      setTempNumber('');
    }
  };

  const setFunction = type => {
    setTempNumber('');
    if (number) {
      setFunctionType(type);
      setStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

  const setStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

  const clearValue = () => {
    setNumber('');
    setTempNumber('');
    setStoredNumber('');
    setFunctionType('');
  };

  const toggleAbs = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (storedNumber > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };

  const calculate = (type = null) => {
    if (type === '%') {
      const percentageOf = storedNumber || number;
      let percentageToGet = "1";
      if (tempNumber) percentageToGet = tempNumber;
      else if (storedNumber) percentageToGet = number;

      if (percentageOf) {
        setStoredNumber(`${Number((parseFloat(percentageToGet) / 100) * parseFloat(percentageOf)).toFixed(1)}`);
      }
      if (!tempNumber) {
        setTempNumber(number);
      }
      setNumber('');
      return;
    }
    const firstNumber = storedNumber;
    const secondNumber = tempNumber.length ? tempNumber : number; 


    if (firstNumber && secondNumber) {
      switch (functionType) {
        case '+':
          setStoredNumber(`${Math.round(`${(parseFloat(firstNumber) + parseFloat(secondNumber)) * 100}`) / 100}`);
          break;
        case '-':
          setStoredNumber(`${Math.round(`${(parseFloat(firstNumber) - parseFloat(secondNumber)) * 100}`) / 100}`);
          break;
        case '/':
          setStoredNumber(`${Math.round(`${(parseFloat(firstNumber) / parseFloat(secondNumber)) * 100}`) / 100}`);
          break;
        case 'x':
          setStoredNumber(`${Math.round(`${parseFloat(firstNumber) * parseFloat(secondNumber) * 100}`) / 100}`);
          break;
        default:
          break;
      }

      if (!tempNumber) {
        setTempNumber(number);
      }
      setNumber('');
    }
  };

  return (
    <FunctionalityContext.Provider
      value={{
        setNumberValue,
        functionType,
        clearValue,
        setFunction,
        toggleAbs,
        number,
        storedNumber,
        calculate,
      }}
    >
      {props.children}
    </FunctionalityContext.Provider>
  );
};

export default FunctionalityProvider;