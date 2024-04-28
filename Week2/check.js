let users = [{
    name:"John",
    subjects:[{
        math:90,
        english:95,
        science:98,
        math1:900,
        english1:95,
        science1:98
        // If the key is same then it will be updated with the new value.
    }]
}];
const userName = users[0].name;

console.log(userName);
console.log(userName);
console.log(users[0]);
console.log(users[0].subjects);
console.log(users[0].subjects.length);

console.log(users[0].subjects[0]);

console.log();
// getting the value.
let marks = Object.values(users[0].subjects[0]);
console.log(marks);
let sub=0;
console.log(marks.length);
for(let i=0;i<marks.length;i++){
    if(marks[i]>95){
        sub+=1;
    }
}
console.log(sub);
for(let sub in users[0].subjects[0]){
    let val = users[0].subjects[sub];
    console.log(sub);
    // math
    // english
    // science
    // math1
    // english1
    // science1
    console.log(sub[0]);// will give m,e,s like that first letter.
}
