import { Calculator } from "./Calculator";

class DecCalculator extends Calculator {
    constructor(selector){
       super(selector);
       console.log(this.getName());
    }
    changeNumber(root){
        let activeElement = root.find('.active');
        activeElement.attr('contenteditable', 'true').text('').trigger('focus');
        activeElement.on('blur', e => {
            if(e.target.textContent === ''){
                e.target.textContent = 0;
            }
        });
        activeElement.on('keydown', e => {
            e.preventDefault();
            if(e.which >= 48 && e.which <= 57 ){
                e.target.textContent = Number(String.fromCharCode(e.which));
            }
        });
        console.log('changeNumber()');
    }
    initEvents(){
        super.initEvents();
        this.$calculatorDOMElement.find(".operator-bar").find('span').on('click', (event) => {
            console.log('plusEvent()start');
            //console.log(this);
            this.checkNumber();
            this.updateResult();
            console.log('plusEvent()end');
        })
    }
    checkNumber(){
        super.checkNumber();
        console.log(this.firstNumberArray);
        console.log(this.secondNumberArray);
    }
    add(arr1, arr2){
        let sum = 0;
        let resultArr = [0,0,0,0,0,0,0,0,0];
        for(var i = arr1.length -1; i >= 0; i--){
            let sum = arr1[i] + arr2[i] + resultArr[i];
            if(sum > 9){ //pamietac zeby uniemozliwic wpisywanie wiecej niz 1 cyfry do elementu w html
                console.log('wiekszy od 9');
                sum -= 10;
                resultArr[i] = sum;
                resultArr[i - 1] += 1;
            }else{
                resultArr[i] = sum;
            }
        }
        return resultArr;
    }

    updateResult(){
        let resultSpans = this.$calculatorDOMElement.find('.result-bit').find('span');
        console.log(resultSpans);
        for (let i = this.resultNumberArray.length -1 , j = 0; i >= 0, j < resultSpans.length ; i--, j++){
            resultSpans.eq(j).text(this.resultNumberArray[i]);
        }
        console.log(this.resultNumberArray);
    }
}


export { DecCalculator };