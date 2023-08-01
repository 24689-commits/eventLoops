//The console.time() method is the console class of Node.js. 
//It is used to starts a timer that is used to compute the time taken by a piece of code or function



//declation of the var variable
var sum = 0;

//this is just a basic function 
function addCount() {
for (var i = 1; i < 100000; i++) {
	sum += i;
}

//this will return the sum
return sum; 
}

var timetaken = "Time taken by addCount function is ";


//this will display the text which is 'time taken by add count function is :'
console.time(timetaken);

//we call the function so that it can calculate how long it takes the function to run 
addCount(); 

//we then say console.timeEnd to end the timer and calculate the outcome of the time
console.timeEnd(timetaken);
