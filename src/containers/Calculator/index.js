import React from 'react';
import Result from '../../components/Result';
import Button from '../../components/Button';
import { CalculatorContainer } from '../../styles/common';
import CalculatorData from '../../utils/calculator-data.json';

const Calculator = () => (
  <CalculatorContainer>
      <div>
        <Result />
        <div className="buttons-layout">
            {CalculatorData.map((el) => (
                <Button key={el.value} value={el.value} type={el.type} />
            ))}
        </div>
      </div>
  </CalculatorContainer>
);

export default Calculator;