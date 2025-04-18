import { useState } from 'react'
import './App.css'
import { Calculator } from './models/calculator';
import NumberButton from './components/NumberButton';

function App() {
  const [calculator, setCalculator] = useState({nombre1 : "", nombre2 : "", operator : ""} as Calculator)

  return (
    <>
      <div className="card">
        <input type="text" className='display' disabled value={calculator.nombre1 + " " + calculator.operator + calculator.nombre2} />
        <div id="buttons">
          <div className='row'>
            <NumberButton value='1' calculator={calculator} setCalculator={setCalculator} />
            <NumberButton value='2' calculator={calculator} setCalculator={setCalculator} />
            <NumberButton value='3' calculator={calculator} setCalculator={setCalculator} />
            <NumberButton value='4' calculator={calculator} setCalculator={setCalculator} />
          </div>  
          <div className='row'>
            <NumberButton value='5' calculator={calculator} setCalculator={setCalculator} />
            <NumberButton value='6' calculator={calculator} setCalculator={setCalculator} />
            <NumberButton value='7' calculator={calculator} setCalculator={setCalculator} />
            <NumberButton value='8' calculator={calculator} setCalculator={setCalculator} />
          </div>
          <div className='row'>
            <NumberButton value='9' calculator={calculator} setCalculator={setCalculator} />
            <button className="operator">*</button>
            <button className="operator">+</button>
            <button className="operator">-</button>
          </div>
          <div className='row'>
          <NumberButton value='0' calculator={calculator} setCalculator={setCalculator} />
            <button className="clear">C</button>
            <button className="operator">/</button>
            <button className="equals">=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
