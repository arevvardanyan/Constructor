// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 1

const Calculator = function(){
}
Calculator.prototype ={ 
   add:  function(num1,num2){
    return num1 + num2
   },
   subtract: function(num1,num2){
    return num1 - num2
   },
   multiply: function(num1,num2){
    return num1 * num2
   },
   divide:function(num1,num2){
    return num1 /  num2
   }
}

const number = new Calculator();
console.log(number.divide(10,5))
console.log(number.add(10,5))
console.log(number.multiply(10,5))
console.log(number.subtract(10,5))