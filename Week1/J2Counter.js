function countTime(){
    let n = 30;
    console.count();
    if(console.count()>30){
        return;
    }
}
countTime()
setInterval(countTime,5);