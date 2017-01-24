//Write a JavaScript program to calculate the factorial of a number.
function factorial(x)   
{   
  
  if (x === 0)  
 {  
    return true;  
 }  
  return x * factorial(x-1);  
           
}  
//console.log(factorial(5));  



// Write a JavaScript program to get the integers in range (x, y) 

// var range = function(start_num, end_num) 
// {
//   if (end_num - start_num === 2) 
//   {
//     return [start_num + 1];
//   } 
//   else 
//   {
//     var list = range(start_num, end_num - 1);
//     list.push(end_num - 1);
//     return list;
//   }
// };


function reverse( str ) {
  if ( str.length <= 1 ) {
    return str;
  }
  debugger
  return reverse( str.substr( 1 ) ) + str[ 0 ];

}
console.log(reverse("Foobar"));



