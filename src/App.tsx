import { useState } from 'react'
import './App.css';
import { Calculator } from './models/calculator';
import NumberButton from './components/NumberButton';
import OperatorButton from './components/OperatorButton';
import configData from './../tsconfig.json';

function App() {
  const [calculator, setCalculator] = useState({nombre1 : "", nombre2 : "", operator : "", result : ""} as Calculator)

  async function sendCalculator( calculator : Calculator) {
    const requestOptions = {
      method : "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(calculator)
    };
    try {
      const response = await fetch(configData.API_URL, requestOptions);
      const data = await response.json();
      if( data.status === 0){
        setCalculator({nombre1 : "", nombre2 : "", operator : "", result : data.message});
      } else {
        setCalculator({nombre1 : "", nombre2 : "", operator : "", result : "ERROR"});
      }
    } catch(error) {
      console.log(error)
      setCalculator({nombre1 : "", nombre2 : "", operator : "", result : "API ERROR"});
    }
  }

  return (
    <>
      <div className="card">
        <input type="text" className='display flex-auto' disabled value={calculator.result? calculator.result : calculator.nombre1 + " " + calculator.operator + " " + calculator.nombre2} />
        <div id="buttons">
          <div className='row'>
            <NumberButton value='7' calculator={calculator} setCalculator={setCalculator} />
            <NumberButton value='8' calculator={calculator} setCalculator={setCalculator} />
            <NumberButton value='9' calculator={calculator} setCalculator={setCalculator} />  
          </div> 
          <div className='row'> 
            <NumberButton value='4' calculator={calculator} setCalculator={setCalculator} />
            <NumberButton value='5' calculator={calculator} setCalculator={setCalculator} />
            <NumberButton value='6' calculator={calculator} setCalculator={setCalculator} />
          </div>
          <div className='row'>
            <NumberButton value='1' calculator={calculator} setCalculator={setCalculator} />
            <NumberButton value='2' calculator={calculator} setCalculator={setCalculator} />
            <NumberButton value='3' calculator={calculator} setCalculator={setCalculator} />
          </div>
          <div className='row'>
            <OperatorButton value='+' calculator={calculator} setCalculator={setCalculator} />
            <NumberButton value='0' calculator={calculator} setCalculator={setCalculator} />
            <OperatorButton value='-' calculator={calculator} setCalculator={setCalculator} />
          </div>
          <div className='row'>
            <OperatorButton value='*' calculator={calculator} setCalculator={setCalculator} />
            <button className="clear m-[5px] bg-gray-500 hover:bg-gray-700" onClick={()=>{
              setCalculator({nombre1 : "", nombre2 : "", operator : "", result : ""})
            }}>C</button>
            <OperatorButton value='/' calculator={calculator} setCalculator={setCalculator} />
          </div>
          <div className='row'>
            <button className="equals bg-gray-500 hover:bg-gray-700" onClick={()=>{
                sendCalculator(calculator);
              }}>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
