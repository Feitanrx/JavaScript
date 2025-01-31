//1

function parimpar (n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
let res = parimpar(333)
console.log(res)

//2

function soma(n1=0, n2=0){
    return n1 + n2
}
console.log(soma(2,5))

//3

let v = function(x) {
    return x*2
}
console.log(v(5))

//4

function fatorial(n) {
    let fat = 1
    for (let c=n ; c > 1 ; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

//5! (5 fatorial) = 5x4x3x2x1
//RECURSIVIDADE

function fatorial (n){
    if (n == 1) {
        return 1
    } else{
        return n * fatorial(n-1)
    }
}

console.log (fatorial(5))