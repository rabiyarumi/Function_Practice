 function sumOfNumbers(numbers){
    let sum = 0;
    for (const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
 }
 const num = [32, 65,34,78, 234,56]
 const result = sumOfNumbers(num);
 console.log('sum of array is:', result);
 //output:- sum of array is: 499