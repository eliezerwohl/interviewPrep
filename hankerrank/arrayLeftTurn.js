    var a = []
    
    for (i = 0; i < k; i++){
        a.push(a[0])
        a.splice(0, 1);
       
    }
    var joined =  a.join(" ")
    console.log(joined)
