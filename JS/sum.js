L = [1,2,3,4,5,6,7,8,9,10] 

let sum = 0
for(let i = 0; i<L.length; i++){
    sum += L[i]
}

console.log('Loop',sum)

function add(acc,cur){
    return acc + cur
}

sum = L.reduce(add)
console.log('Reducer', sum)

sum = L.reduce((acc,cur) => acc + cur)
console.log("Arrow", sum)


let multi = L.reduce((a,b) => a*b)
console.log('Multiplication ',multi)