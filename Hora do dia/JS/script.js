function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var msg2 = document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    msg2.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        msg.innerHTML = 'Bom dia!'
        img.src = '../Fotos/dia.jpg'
        document.body.style.background = '#839C57'
    } else if (hora >= 12 && hora < 18){
        msg.innerHTML = 'Boa tarde!'
        img.src = '../Fotos/tarde.jpg'
        document.body.style.background = '#E1B378'
    } else {
        msg.innerHTML = 'Boa noite!'
        img.src = '../Fotos/noite.jpg'
        document.body.style.background = '#0E5352'
    }

}
