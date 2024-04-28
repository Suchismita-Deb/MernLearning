For connecting the express the important lines are import and object.
```javascript
const express = require('express');
const app = express();
app.listen(3000);
```
If the JSON is like.
```javscript
let users = [{
    name:"John",
    subjects:[
        {math:90,},
        {english:95},
        {science:98}
    ]
}];
```

- Array containing object.
- To get the name of the first array.
```js
const userName = users[0].name;
console.log(userName);
```

With query parameter we can send the request and with request body also we can send the request.