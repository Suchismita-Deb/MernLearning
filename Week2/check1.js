let users = [{
    name:"John",
    subjects:[
        {math:90,},
        {english:95},
        {science:98}
    ]
}];

let sub=0;
console.log(users[0].subjects.length)
console.log(users[0].subjects[0])
let val = users[0].subjects[0];
console.log(val["math"])
for(let i=0;i<users[0].subjects.length;i++){
    let val = users[0].subjects[i];
    if(val["math"]>95) sub+=1;
    if(val["english"]>95) sub+=1;
    if(val["science"]>95) sub+=1;
}
console.log(sub)
