function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    hora = data.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas.`;
    
    if (hora >= 0 && hora < 12) {
        //Manhã
        img.src = 'manha.jpg'
        document.body.style.background = ' #87ceeb'
    }else if (hora >= 12 && hora <= 18){
        //Tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#F8B100'
    }else {
        //Noite
        img.src = 'noite.jpg'
        document.body.style.background = '#00292B'
    }
}