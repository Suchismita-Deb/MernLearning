const express = require('express');
const app = express();
let users = [{
    name: "John",
    subjects: [
        { math: 98 },
        { english: 95 },
        { science: 98 }
    ]
}];



app.put("/updateMathMarks", function(req, res){
    const newMathMarks = parseInt(req.body.newMathMarks);
    if (!isNaN(newMathMarks)) {
        users[0].subjects = users[0].subjects.map(subject => {
            if (subject.math !== undefined) {
                return { math: newMathMarks };
            }
            return subject;
        });

        res.json({ msg: "Math marks updated" });
    } else {
        res.status(400).json({ msg: "Invalid math marks" });
    }
});


app.get("/countHighScores", function(req, res){
    let sub = 0;
    for(let i = 0; i < users[0].subjects.length; i++){
        let subject = users[0].subjects[i];
        let subjectName = Object.keys(subject)[0];
        let marks = subject[subjectName];

        if(marks > 95) sub += 1;
    }
    res.json({ sub });
});

app.listen(3000);