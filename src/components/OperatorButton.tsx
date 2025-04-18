import { Button } from "../models/button";
//Permet de gérer les boutons d'opération.
export default function OperatorButton({value , calculator, setCalculator}: Button) {


    return(
        <button onClick={() =>{
            if( calculator.nombre1.length > 0 && calculator.operator.length === 0 ){
                setCalculator({nombre1 : calculator.nombre1, nombre2 : calculator.nombre2, operator : value, result : ""});
            }
            if( calculator.nombre1.length > 0 && calculator.operator.length > 0 && calculator.nombre2.length === 0 && value === "-"){
                setCalculator({nombre1 : calculator.nombre1, nombre2 : calculator.nombre2+value, operator : calculator.operator, result : ""});
            }
            if( calculator.nombre1.length === 0 && value === "-" ){
                setCalculator({nombre1 : calculator.nombre1+value, nombre2 : calculator.nombre2, operator : calculator.operator, result : ""});
            }
        }} className="number">{value}</button>
    );
}