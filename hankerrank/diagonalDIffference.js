function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var left = 0
    var right = 0
    for(i=0;i<a.length; i++){
        left += a[i][i]
        right += a[i][a.length -1 - i]
        if (i == a.length -1){
            console.log (Math.abs(left - right))
        }
    }
 
}
