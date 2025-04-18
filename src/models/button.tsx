import { Calculator } from "./calculator";

export interface Button {
    value : string;
    calculator : Calculator;
    setCalculator : Function;
}