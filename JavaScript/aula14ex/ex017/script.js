function tabuada(){
    let num = window.document.getElementById('num')
    let tab = window.document.getElementById('tab')
    if(num.value.length == 0) {
        window.alert('Digite um numero!')
    }else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}