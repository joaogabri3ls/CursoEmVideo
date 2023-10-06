let num = [5, 8, 2, 9, 6]

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)

let posicao = num.indexOf(12)
    if(posicao == -1){
        console.log("Valor não encontrado!")
    }else{
        console.log(posicao)
    }