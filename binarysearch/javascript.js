  //taken from interviewcake

  function binarySearch(target, nums) {
  	debugger
    // see if target appears in nums

    // we think of floorIndex and ceilingIndex as "walls" around
    // the possible positions of our target so by -1 below we mean
    // to start our wall "to the left" of the 0th index
    // (we *don't* mean "the last index")
    var floorIndex = -1;
    var ceilingIndex = nums.length;

    // if there isn't at least 1 index between floor and ceiling,
    // we've run out of guesses and the number must not be present
    while (floorIndex + 1 < ceilingIndex) {

        // find the index ~halfway between the floor and ceiling
        // we have to round down, to avoid getting a "half index"
        var distance = ceilingIndex - floorIndex;
        var halfDistance = Math.floor(distance / 2);
        var guessIndex = floorIndex + halfDistance;

        var guessValue = nums[guessIndex];

        if (guessValue === target) {
            return true;
        }

        if (guessValue > target) {

            // target is to the left, so move ceiling to the left
            ceilingIndex = guessIndex;

        } else {

            // target is to the right, so move floor to the right
            floorIndex = guessIndex;
        }
    }

    return false;
}

var nums = [1,2,3,4,5,6,7,8,9]
var target = 3;
console.log(binarySearch(target, nums))
