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


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 2

const Person = function(name,age){

    this.name = name,
    this.age = age
    
    getName = function(){
        return this.name
    }
    getAge = function(){
        return this.age
    }
}

Person.prototype.compareAge = function(obj){
    const {age} = obj
    if(this.age > age){
        return `${this.name} is older than me`
    }else if(this.age === age){
        return `${this.name} is the same age as me.`
    }else{
        return `${this.name} is younger than me`
    }
}

const p1 = new Person("Samuel", 24)
const p2 = new Person("Joel", 36)
const p3 = new Person("Lily", 24)
console.log(p1.compareAge(p2))
console.log(p2.compareAge(p1))
console.log(p1.compareAge(p3))