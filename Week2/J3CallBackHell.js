setTimeout(function(){
    console.log("Hello")
},1000);
// Calling one async function.

setTimeout(function(){
    console.log("1");
    setTimeout(function(){
        console.log("8")
    },5000);
},3000);