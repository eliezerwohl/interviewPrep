//what integer appears the most in an array
intArrayUnsorted = [1,4,4,5,3,2,1,3,4,5,6,54,3,4,5,4,3,3,3,3,4,5,6,6,5,2,3,1,2,3,1,1,1,3]
intArray = intArrayUnsorted.sort()
var currentNumber, recordNumber;
var currentCount = 0;
var recordCount = 0;
for (var i = 0; i < intArray.length; i++) {
	if (intArray[i] != currentNumber ){
		currentNumber == intArray[i];
		currentCount = 0;
	}
	currentNumber = intArray[i];
	currentCount++;
	if (currentCount > recordCount){
		recordCount = currentCount;
		recordNumber = currentNumber;
	}
	if (i == intArray.length -1){
		console.log("this appears the most " + recordNumber + " appears this many times : " + recordCount);
	}
}