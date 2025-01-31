function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano)
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var gênero = ''
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade <10){ //criança
            img.setAttribute('src', 'media/bebe-m250.png')
        }
            else if (idade < 21){ //jovem
            img.setAttribute('src', 'media/jovem-m.png')
        }
            else if ( idade < 50){ //adulto
            img.setAttribute('src', 'media/adulto-m250.png')
        }

            else { //idoso
            img.setAttribute('src', 'media/idoso250.png')
            }
        } else if ( fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10){ //crinaça
                img.setAttribute('src', 'media/bebe-f250.png')
            }
            else if (idade < 21){ //jovem
                img.setAttribute('src' , 'media/jovem-f250.png')
                }
            else if ( idade < 50){ //adulto
                img.setAttribute('src', 'media/adulta-f250.png')
                }
            else { //idoso
                img.setAttribute('src', 'media/senhora-f250.png')
            }
        }
        res.style.textAlign = 'center'    
        //res.innerHTML = `Idade calculada: ${idade}`
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
           
        }
}