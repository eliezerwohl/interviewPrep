function bubbleSort(array){
	var len = array.length;
	var i, j;
	//this one goes backwards
	for (i = len; i >=0; i--){
		for (j = len-1; j >= 0; j --){
			if (array[j] < array [j-1]){
				var temp = j;
				array[j] = array[j-1];
				array[j-1] = temp;
			}

		}
	}
	console.log("backwards: " + array);
}

function foward(array){
	var len = array.length;
	var i, j, stop;
	for (i = 0; i <len; i++){
		//becuase it's going foward, it know the last number is the highest
		//the stop var makes sure it doesn't loop over number it knows are in the right place
		for (j = 0, stop= len-i; j <stop; j ++){
			if (array[j] > array [j+1]){
				var temp = j;
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	}
	console.log("Foward:" +array)
}

var array =[1,6,9,4,6,8,3,2,0];
foward(array)

bubbleSort(array);