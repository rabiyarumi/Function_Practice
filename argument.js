function doubleIt (number){
    const doubled = number * 2;
    console.log(number, "=", doubled);
}
doubleIt(6);
doubleIt(67);
doubleIt(456);
doubleIt(98);
const money = 87;
doubleIt(money); // akhane money k double kore output dekhabe

//--------------------------------------
//argument k variale a rakha || parametar k variable a rekhe call kora
function defference (num1, num2){
    const dif = num1 - num2;
    console.log(num1, num2, "difference is", dif);
}
const myAge = 20;
const fatherAge = 67;
defference(fatherAge, myAge);
 