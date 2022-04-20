import React from 'react';
import CalculatorBody from './components/calculator';

class AppBody extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <CalculatorBody />
      </div>
    );
  }
}

export default AppBody;
