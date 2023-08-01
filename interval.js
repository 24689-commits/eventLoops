let counter = 1;

const interval = setInterval(() => {
    console.log(`message ${counter}`);
    counter++;

    if(counter === 4) {
        clearInterval(interval)
        //Stops the interval after it printed 3 messages
        console.log("Interval has stopped");
    }
}, 2000); // 2000 milliseconds (2 seconds) interval