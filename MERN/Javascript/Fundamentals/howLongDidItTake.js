var isPrimes = (function(num) {
    var arr = [];
    var primes = [];
    for (var i = 2; i <= num; ++i) {
        if (!arr[i]) {
            primes.push(i);
            for (var j = i << 1; j <= num; j += i) {
                arr[j] = true;
            }
        }
    }
    return primes;
});
console.log(isPrimes(100))
console.log(isPrimes(100000))
console.log(isPrimes(1000000))