function sum(a,b,funCall){
    let val = a+b;
    funCall(val);
}
function sum1(n){
    console.log("The sum of the number is " +n);
}
const ans = sum(8,98,sum1);


// Without callbacks.
function sum(a,b){
    let val = a+b;
    sum1(val);
    // We have to change the function name to call other function.
}
function sum1(n){
    console.log("The sum of the number is " +n);
}
const ans1 = sum(8,98);