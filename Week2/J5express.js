const express = require('express');
const app = express();
let users = [{
    name:"John",
    subjects:[
        {math:98},
        {english:95},
        {science:98}
    ]
}];
/*
app.get("/",function(req,res){
    let userName = users[0].name;
    let subjectMoreThan95 = 3;
    // console.log(users[0].subjects["math"]);
    // we access array with index and object we have to write the value.
    let marks = Object.values(users[0].subjects[0]);
    // // console.log(marks);
    let sub=0;
    for(let i=0;i<marks.length;i++){
        if(marks[i]>95){
            sub+=1;
        }
    }
    // console.log(subjectMoreThan95);
    res.json({
        // userName
        subjectMoreThan95,
        marks,
        // marks
        sub
    })
})*/

app.get("/",function(req,res){
    let sub=0;
    for(let i=0;i<users[0].subjects.length;i++){
        let val = users[0].subjects[i];
        if(val.math>95) sub+=1;
        if(val.english>95) sub+=1;
        if(val.science>95) sub+=1;
    }
    res.json({
        sub
    })
})


app.use(express.json())
app.post("/",function(req,res){
    const isMath = req.body.isMath;
    users[0].subjects["math"]=isMath;

    // const nameUpdate = req.body.nameUpdate;
    // users[0].name
    res.json({
        msg:"Done"
    })
})
app.listen(3000);