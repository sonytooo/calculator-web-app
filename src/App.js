import React from 'react';
import Calculator from './containers/Calculator/index';
import FunctionalityProvider from './components/FunctionalityProvider';

const App = () => (
  <FunctionalityProvider>
    <Calculator />
  </FunctionalityProvider>
);

export default App;