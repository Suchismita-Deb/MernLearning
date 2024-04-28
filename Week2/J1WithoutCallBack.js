function square(a){
    return a*a;
}

function cube(a){
    return a*a*a;
}

function quad(a){
    return a*a*a*a;
}

function sum2Num(a,b){
    return square(a) + square(b);
}
function cube2Num(a,b){
    return cube(a) + cube(b);
}
function quad2Num(a,b){
    return quad(a) + quad(b);
}
console.log(sum2Num(1,2));
console.log(cube2Num(1,2));
console.log(quad2Num(1,3));
