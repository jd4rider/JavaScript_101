//total starts at 0
var z = 0;

//iterate through numbers starting with 1 up through 1000
for(var a =1; a < 1001; a++){

    //check to see if a is divisible by 3
    if(a % 3 === 0){
        //if a is divisible by 3 add to total
        z = z + a;
    }
    //check to see if number is divisible by 5
    else if(a % 5 === 0){
    	//if a is divisible by 5 add to total
        z = z + a;
    }
}

//log out total
console.log(z);