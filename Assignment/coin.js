function flipCoin(callback) {
   
    const randomNumber = Math.random();

 
    if (randomNumber < 0.5) {
        callback("heads");
    } 
    
    else {
        callback("tails");
    }
}


flipCoin(result => {
    console.log("the result is", result);
});