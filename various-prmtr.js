function evenSizedStr (str){
    const size = str.length;
    console.log(str, size);
    if( size % 2 === 0){
        console.log("Even size")
    }
    console.log("Odd size")
}
evenSizedStr('Bangladesh');
evenSizedStr('Qatar');


//----------------------
//Boolean parametar
function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
console.log(doubleOrTriple(5, true)); // output is 10
console.log(doubleOrTriple(5, false));// output is 15

//------------------------------------
//array parametar
function numberOfElements(number){
    return number.length;
}
const result = numberOfElements([35, 75, 86, 35, 2756, 23, 64 , 745]);
console.log(result); // output is 8
