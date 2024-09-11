function squar(number) {
    console.log("value of the parametar:", number)
    const borgo = number * number;
    console.log("squar of the number:", borgo);
}
squar(5);
squar(6);
squar(7);
squar(8);
squar(9);

//sum with paramiters
function add(a, b){
    const total = a + b;
    console.log("sum of the number:", a, '+', b);
    console.log(total);
}
add(5, 90);
add(35, 78);

//paramitar value problem
function addAll(a, b, c, d, e, f, g){
    const total = a + b + c + d + e + f + g;
    console.log("sum of the number:", a, '+', b, '+', c,'+', d ,'+', e, '+', f, '+', g);
    console.log(total);
}
addAll(45, 67, 24, 3, 76, 76, 20);
addAll(45, 67, 24, 3, 76, 20); //1 number is undefined here so the value will be "NUN"