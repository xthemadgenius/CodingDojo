// 1 - isPrime
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

// 2 recursive or iterative fibanacci
// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
console.log(rFib(20));
// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
console.log(iFib(20));

// ran tests on the on the code on repl and console iterative was faster at processing the result since
//  it is more code and has more more specific methods in play to ensure that the function locates,
//  mitigates, and breaks out a solution. 

// 3 Reverse a String
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1)
const reversed2 = str =>[...str].reverse().join("");
console.log(reversed2(story))
