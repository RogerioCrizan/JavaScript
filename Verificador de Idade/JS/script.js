function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var mas = document.getElementById('mas')
    if (fano.value.lenght == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', '../Fotos/crianca-m.jpg')
            } else if (idade < 21){
                img.setAttribute('src', '../Fotos/jovem-m.jpg')
            } else if (idade < 50){
                img.setAttribute('src', '../Fotos/adulto-m.jpg')
            } else{
                img.setAttribute('src', '../Fotos/idoso-m.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'            
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', '../Fotos/crianca-f.jpg')
            } else if (idade < 21){
                img.setAttribute('src', '../Fotos/jovem-f.jpg')
            } else if (idade < 50){
                img.setAttribute('src', '../Fotos/adulto-f.jpg')
            } else{
                img.setAttribute('src', '../Fotos/idosa-f.jpg')
            }
        }
        img.style.marginTop = '15px'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
