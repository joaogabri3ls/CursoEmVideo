let num = document.getElementById('num')
let lista = document.getElementById('lista')
let div = document.getElementById('res')
let valores = []

function eNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
 }

function eLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar(){
    if(eNumero(num.value) && !eLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Numero inválido ou já adicionado a lista!')
    }
    num.value = '' // Depois do if ou do else o num.value fica vazio.
    num.focus() // Apos o enter ou 'Adicionar' a barra continua selecionada
    
}

function finalizar() {
    if(valores.length == 0){
        window.alert('Nenhum valor adicionado!')
    } else {
        let total = valores.length
        let soma = 0
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo foram adicionados ${total} numeros.</p>`
        res.innerHTML += `<p>O maior valor foi: ${maior}</p>`
        res.innerHTML += `<p>O menor valor foi: ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é: ${media}</p>`
    }
}