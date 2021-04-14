import React, { useContext } from 'react';
import { FunctionalityContext } from './FunctionalityProvider';
import { ResultContainer } from '../styles/common';

const Result = () => {
  const { number, storedNumber } = useContext(FunctionalityContext);
  return (
    <ResultContainer>
      <h2>
        {!number.length && !storedNumber ? '0' : number || storedNumber}
      </h2>
    </ResultContainer>
  );
};

export default Result;