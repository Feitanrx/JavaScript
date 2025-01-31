function carregar () {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 5
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >=0 && hora < 12){
    //bom dia
    img.src = 'media/manha250.png'
    document.body.style.background = '#bfbb3d'
} else if (hora>= 12 && hora <=18){
    //boa tarde
    img.src = 'media/tarde250.png'
    document.body.style.background = '#6fe171'
} else{
    //Boa noite
    img.src = 'media/noite250.png'
    document.body.style.background = '#ff7221cc'
}
}