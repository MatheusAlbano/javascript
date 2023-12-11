let num=[5,8,4]
num[3]=6
num.push(7) //Adiciona o elemento na última posição do vetor
num.sort() //Coloca os elementos do vetor em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let index=num.indexOf(7) //Busca a posição do número 7 dentro do array, caso não exista retornará -1
console.log(`O valor 7 está na posição ${index}`)
if (index==-1) {
    console.log('O valor não foi encontrado!')
}
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
/*
for(pos=0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

/*
let i=0
let pos=num.length-1
while(i<=pos){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
    i++
}
*/

