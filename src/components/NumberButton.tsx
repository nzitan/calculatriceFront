import { Button } from "../models/button";
//Permet de gérer les boutons numérique.
export default function NumberButton({value , calculator, setCalculator}: Button) {


    return(
        <button onClick={() =>{
            if( calculator.operator.length === 1 ){
                setCalculator({nombre1 : calculator.nombre1, nombre2 : calculator.nombre2+value, operator : calculator.operator, result : ""});
            } else {
                setCalculator({nombre1 : calculator.nombre1+value, nombre2 : calculator.nombre2, operator : calculator.operator, result : ""});
            }
        }} className="number">{value}</button>
    );
}