// fibonacci 
  function fib(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}

// from inteview cake

// why not 
  function fib2(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n-1) + fib(n-2);
	}

	console.log(fib(20))
	console.log(fib2(20))

	