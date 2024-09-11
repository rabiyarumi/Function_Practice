function evenNumbers(numbers){
    console.log(numbers);
    const evens = [];
    for( const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}
const numbers=[24, 66, 87, 46, 98, 95, 13]
const evens = evenNumbers(numbers);
console.log(" all the even numbers:", evens)

// sum of even numbers
function sumOfEvenNumbers (numberss){
    let sum = 0;
    for (const number of numberss ){
        if(number % 2 === 0){
            console.log(number)
            sum = sum + number;
        }
    }
    return sum;
}
const numberss=[24, 66, 87, 46, 98, 95, 13]
const sum = sumOfEvenNumbers(numberss);
console.log("sum of even numbers:", sum);
