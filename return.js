function tenTimes (number){
    const result = number * 10;
    console.log(result);
    return result;
    console.log(result); // it will not work


}
// tenTimes(5);
const output = tenTimes(90);

//return shortcut
function shortCut (a, b){
    return a + b;
}
const result = shortCut(9, 5);
console.log("shortCut output:", result);

// math 
function math (a, b){
    const add = a + b;
    const diff = a - b;
    const mult = add * diff;
    const result = mult / 3;
    return result;
}
const result2 = math(76, 43);
console.log('math output:', result2);

