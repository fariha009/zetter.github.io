function sum(a,b){
    return a++  +  ++b;
}

let res = sum(10, 20);

console.log(sum(res,5));