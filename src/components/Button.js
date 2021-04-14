import React, { useContext } from 'react';
import { FunctionalityContext } from './FunctionalityProvider';

const Button = ({ value, type }) => {
  const { 
      setNumberValue, 
      setFunction, 
      toggleAbs, 
      clearValue, 
      calculate 
  } = useContext(FunctionalityContext);

  const setButtonAction = () => {
    if (type === 'number') {
        return setNumberValue(value);
    } else if (type === 'func') {
        return setFunction(value);
    } else if (type === 'abs') {
        return toggleAbs();
    } else if (type === 'clear') {
        return clearValue();
    } else if (type === 'equal' || type === 'percentage') {
        return calculate(type === 'percentage' ? '%' : null);
    }
  }

  const setClassName = () => {
    if (type === 'func' || type === 'equal') {
        return 'function-button';
    } else if (type !== 'number') {
        return 'secondary-button'
    }
  }

  const renderButton = () => (
    <button 
        type="button" 
        className={setClassName()}
        onClick={() => setButtonAction()}
    >
      {value}
    </button>
  )

  return (
    <div className={value === 0 ? 'long-button-wrapper' : undefined}>
      {renderButton()}
    </div>
  );
};

export default Button;