
  function findEvenIndex(arr)
{
  //Code goes here!
    for (var i = 0; i <arr.length; i++) {
    var right = 0;
    var left = 0;
    for (var l = 0; l < i; l++) {
    left = left + arr[l]

    }
    for (var r = i + 1; r <arr.length; r++) {
        right = right+  arr[r]
    }
  
    if (left == right){
      return i
    }
    else if (i == arr.length -1 ){
      return -1
    }
  }
}

//best answer

function findEvenIndex(arr)
{
  for(var i=1; i<arr.length-1; i++) {
    if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
      return i;
    }
  }
  return -1;
}