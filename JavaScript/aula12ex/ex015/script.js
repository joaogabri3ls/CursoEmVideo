function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Erro!! Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
         
        if (fsex[0].checked) {
            gen = 'homem'
            if (idade >= 0 && idade < 10) {
                //Menino
                img.setAttribute('src', 'menino.jpg')
                
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-m.jpg')

            }else if (idade < 50) {
                 //Adulto
                 img.setAttribute('src', 'homem.jpg')

            }else {
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
            }

        } else if (fsex[1].checked){
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Menina
                img.setAttribute('src', 'menina.jpg')

            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src','jovem-f.jpg')

            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher.jpg')

            }else {
                //Idoso
                img.setAttribute('src', 'idosa')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
   
    }
}