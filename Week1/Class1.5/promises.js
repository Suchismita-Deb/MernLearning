let d = new Promise(function (onDone) {
    onDone();
  });
  
  function callback(){
    console.log("P");
  }
  
  d.then(callback);