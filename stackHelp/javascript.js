
  function findEvenIndex(arr)
{
  //Code goes here!
  for (var i = 0; i <arr.length; i++) {
  var right = 0;
  var left = 0;

    for (var r = 0; r < i; r++) {
    left = left + arr[r]

    }
      for (var l = i + 1; l <arr.length; l++) {
        right = right+  arr[l]
      
    }
    console.log("r is: " + right + "....and l is: " + left)  
  
    if (left == right){
      return i
   
    }
    else if (i == arr.length -1 ){
      return -1
    }
  }

}
var arr =  [1,2,3,4,3,2,1] 
findEvenIndex(arr)