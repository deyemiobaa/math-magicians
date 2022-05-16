import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CalculatorBody from './components/calculator';
import QuoteBody from './components/quote';
import Home from './components/home';
import NavBar from './components/nav';

class AppBody extends React.PureComponent {
  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<CalculatorBody />} />
            <Route path="/quote" element={<QuoteBody />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default AppBody;
