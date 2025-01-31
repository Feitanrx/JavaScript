function contar (){
    
var ninic = document.getElementById('numinic')
var nfin = document.getElementById('numfin')
var npas = document.getElementById('numpas')
var res = document.getElementById('res')
//for (nres = ${};      ;ninic ++npas)

if (ninic.value.length == 0 || nfin.value.length == 0 || npas.value.length == 0) {
    window.alert("Faltam DADOS")
} else {
    res.innerHTML = `Contando: <br>`
    var i = Number(ninic.value)
    var f = Number(nfin.value)
    var p = Number(npas.value)

    if (p <= 0 ){
        window.alert('Impossível contar. Considerando passo 1')
        p = 1
    }

    if (i < f){
        //contagem crescente
        for(var c = i; c <= f; c += p){
        res.innerHTML += ` ${c} \u{1F449}	`
    }
        
    } else {
        //contagem regressiva
        for ( var c = i; c >= f; c-= p ){
            res.innerHTML += ` ${c} \u{1F449}	`
        }
    }
    }
res.innerHTML += `\u{1F3C1}`
    
}
