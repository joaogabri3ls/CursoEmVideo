function resultado(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Erro!! Faltam dados!')
    }else{
        res.innerHTML = 'Contando:'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <=0){
            window.alert('PAsso inválido! consideramos passo como 1')
            p = 1
        }
        if(i < f) {
            //Contagem cresente
            for(let a = i; a <= f; a += p) {
                res.innerHTML += ` ${a}`
            }
       
        }else{
            for(let a = i; a >= f; a -= p){
                res.innerHTML += ` ${a}`

            }
        }
    }
    
}

