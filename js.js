function fib(n, arr = []){
    if(arr.length == n){
        return arr;
    }

    let prev = arr[arr.length - 1];
    if(!prev){
        arr.push(0);
        prev = 0;
    }

    let prevPrev = arr[arr.length - 2];
    if(!prevPrev){
        arr.push(1);
        prevPrev = 1;
    }

    arr.push(prev + prevPrev);
    return fib(n, arr);
}
console.log('fib(n) returns an array of the first n numbers in the fibonacci sequence. For example, fib(8) returns...')
console.log(fib(8));