//initialize Fibonacci Array
var z = [];

//Iterate to build Fibonacci Array "z"
for(var a = 0; a <= 100; a++){
    //if array is only less then or equal to 3 indices long, only push the value of a
    if(z.length <= 3){
        z.push(a);
    }
    //once past the first three (0, 1, 2) the array will get the next value
    //as the last two values added together
    else{
        z.push(z[a-1]+z[a-2]);
    }
    //create a variable set to value of current index in array
    var n = z[a];
    //check if value stored at the current index is greater than 4,000,000 per instructions
    if(n > 4000000){
        //remove zero at lead position of array
        z.shift();
        //remove number that is greater than 4,000,000 at end of array so all numbers are less than 
        //4,000,000
        z.pop();
        //break out of Fibonacci Array building loop
        break;
    }
}

//initialize total
var total = 0;

//loop through Fibonacci Array
for(var b =0; b < z.length; b++){
    //when number is divisible by 2 (even) add that number to total
    if(z[b] % 2 === 0){
        total = total + b;
    }
}

//console.log(z);
//log out the total
console.log(total);