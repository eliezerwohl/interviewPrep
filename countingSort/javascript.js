  function countingSort(theArray, maxValue) {

    // array of 0's at indices 0...maxValue
    var numCounts = [];
    for (var i = 0; i < maxValue + 1; i++) {
    	debugger
        numCounts[i] = 0;
    }

    // populate numCounts
    theArray.forEach(function(num) {
    	debugger
        numCounts[num] += 1;
    });

    // populate the final sorted array
    var sortedArray = [];
    var currentSortedIndex = 0;
    // numcounts is now this [0, 1, 1, 1, 1, 1, 0, 0, 2, 1]

    // for each num in numCounts
    for (var num = 0; num < numCounts.length; num++) {
    	debugger
        var count = numCounts[num];

        // for the number of times the item occurs
        for (var x = 0; x < count; x++) {
        	debugger

            // add it to the sorted array
            sortedArray[currentSortedIndex] = num;
            currentSortedIndex++;
            //auto makes the next number that needs to be put in, put in the right spot
        }
    }

    return sortedArray;
}
var array = [1,9,8,8,3,5,4,2]

countingSort(array, 9)
// taken from interview Cake