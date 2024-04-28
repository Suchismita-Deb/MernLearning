function square(a){
    return a*a;
}

function cube(a){
    return a*a*a;
}

function quad(a){
    return a*a*a*a;
}
function something(a,b,fn){
    return fn(a) + fn(b);
}

console.log(something(1,2,square));
console.log(something(1,2,cube));
console.log(something(1,3,quad));