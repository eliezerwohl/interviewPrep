//create staircase


function main() {
    var n = parseInt(readLine());
    for(i = 0; i < n; i++){
       var  temp = i + 1 ;
       var tempVar = ""
        for(j=n;  j>=0; j--){
            if (temp<j){
                tempVar += " "
            }
            else if (temp > j){
                tempVar += "#"
            }
            if (j == 0){
                console.log(tempVar)
            }
            
        }
    }
}


//Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. 
//The last line is not preceded by any spaces.

Write a program that prints a staircase of size n .

