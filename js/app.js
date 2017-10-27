import { BinaryCalculator } from "./BinaryCalculator";
import { DecCalculator } from "./DecCalculator";

import "./style.scss";



$(document).ready(function() {
    const bitCalc = new BinaryCalculator(".binary-calculator");
    console.log(bitCalc);

    const decCalc = new DecCalculator('.dec-calculator');
    console.log(decCalc);

})
