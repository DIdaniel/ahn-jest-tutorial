import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const [isOn, setIsOn] = useState(false);

  const handlePlusCount = () => {
    setCount(prev => prev + 1);
  };

  const handleMinusCount = () => {
    setCount(prev => prev - 1);
  };

  const handleOnOff = () => {
    setIsOn(prev => !prev);
  };

  return (
    <div className="App">
      <h3 data-testid="counter" style={{ color: 'red', marginBottom: '2rem' }}>
        {count}
      </h3>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '7rem',
            marginBottom: '1rem'
          }}
        >
          <button
            data-testid="minus-button"
            disabled={isOn}
            onClick={handleMinusCount}
            style={{ width: '60px', height: '30px' }}
          >
            -
          </button>
          <button
            data-testid="plus-button"
            disabled={isOn}
            onClick={handlePlusCount}
            style={{ width: '60px', height: '30px' }}
          >
            +
          </button>
        </div>
        <button
          data-testid="onOff-button"
          onClick={handleOnOff}
          style={{ width: '80px', background: 'blue' }}
        >
          on/off
        </button>
      </div>
    </div>
  );
}

export default App;
