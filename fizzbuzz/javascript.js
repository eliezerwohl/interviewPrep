

// "Write a program that prints the numbers from 1 to 100. 
//But for multiples of three print “Fizz” instead of the number and for 
//the multiples of five print “Buzz”. For numbers which are multiples of 
//both three and five print “FizzBuzz”."

for (var i = 1; i < 101; i++) {
	debugger;
	if ((i % 5 == 0) && (i % 3 == 0)){
		console.log("fizzbuzz" + i)
	}
	else if (i % 3 == 0){
		console.log("fizz")
	}
	else if(i % 5 == 0){
		console.log("buzz")
	}
	else
		{
			console.log(i)
		}
}
//better solution

function fizzbuzz(fizz, buzz, number){
	for (var i = 1; i <= number; i++) {
	if ((i % buzz == 0) && (i % fizz == 0)){
		console.log("fizzbuzz" + i)
	}
	else if (i % fizz == 0){
		console.log("fizz")
	}
	else if(i % buzz == 0){
		console.log("buzz")
	}
	else
		{
			console.log(i)
		}
	}
}
fizzbuzz(3,5, 100)

