function fib(n){
    if(n<=1){
        return n
    }
    return fib(n-1)+fib(n-2)
}

let num=7
let arr = []
for(let i=0; i<num;i++){
    arr.push(fib(i))
}
console.log(arr);
