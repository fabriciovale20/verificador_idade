function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = ano - Number(fano.value)
        var genero_masculino = document.getElementById('mas')
        var genero_feminino = document.getElementById('fem')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (genero_masculino.checked) {
            var genero = 'Homem'
            var genero_img = 'm'

            faixa_etaria(idade, genero_img, img)
        } else if (genero_feminino.checked) {
            var genero = 'Mulher'
            var genero_img = 'f'

            faixa_etaria(idade, genero_img, img)
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.append(img)
    }
}

function faixa_etaria(idade, genero_img, img) {
    if (idade >= 0 && idade < 10) {
        // Criança
        return img.setAttribute('src', `img/foto-bebe-${genero_img}.png`)
    } else if (idade < 21) {
        // Jovem
        return img.setAttribute('src', `img/foto-jovem-${genero_img}.png`)
    } else if (idade < 50) {
        // Adulto
        return img.setAttribute('src', `img/foto-adulto-${genero_img}.png`)
    } else {
        // Idoso
        return img.setAttribute('src', `img/foto-idoso-${genero_img}.png`)
    }
}