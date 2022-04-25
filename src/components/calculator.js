import React, { useState } from 'react';
import calculate from '../logic/calculate';

const keys = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

function CalculatorBody() {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const buttonName = e.target.textContent;
    const res = calculate(obj, buttonName);
    setObj(res);
  };
  const { total, next } = obj;

  // set up the grid
  const firstRow = keys[0].map((buttonName) => {
    if (buttonName === '÷') {
      return <button type="button" onClick={handleClick} className="key action" key={buttonName}>{buttonName}</button>;
    }
    return <button type="button" onClick={handleClick} className="key" key={buttonName}>{buttonName}</button>;
  });
  const secondRow = keys[1].map((buttonName) => {
    if (buttonName === 'x') {
      return <button type="button" onClick={handleClick} className="key action" key={buttonName}>{buttonName}</button>;
    }
    return <button type="button" onClick={handleClick} className="key" key={buttonName}>{buttonName}</button>;
  });
  const thirdRow = keys[2].map((buttonName) => {
    if (buttonName === '-') {
      return <button type="button" onClick={handleClick} className="key action" key={buttonName}>{buttonName}</button>;
    }
    return <button type="button" onClick={handleClick} className="key" key={buttonName}>{buttonName}</button>;
  });
  const fourthRow = keys[3].map((buttonName) => {
    if (buttonName === '+') {
      return <button type="button" onClick={handleClick} className="key action" key={buttonName}>{buttonName}</button>;
    }
    return <button type="button" onClick={handleClick} className="key" key={buttonName}>{buttonName}</button>;
  });
  const fifthRow = keys[4].map((buttonName) => {
    if (buttonName === '0') {
      return <button type="button" onClick={handleClick} className="key zero" key={buttonName}>{buttonName}</button>;
    } if (buttonName === '=') {
      return <button type="button" onClick={handleClick} className="key action" key={buttonName}>{buttonName}</button>;
    }
    return <button type="button" onClick={handleClick} className="key" key={buttonName}>{buttonName}</button>;
  });

  return (
    <div className="calculator">
      <div className="display">
        <input
          type="text"
          id="display"
          value={next || total || '0'}
          readOnly
        />
      </div>
      <div className="keypad">
        {firstRow}
        {secondRow}
        {thirdRow}
        {fourthRow}
        {fifthRow}
      </div>
    </div>
  );
}

export default CalculatorBody;
