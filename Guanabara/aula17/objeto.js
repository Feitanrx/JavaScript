let amigo = { nome: 'José',
    sexo: 'M',
    peso: 85,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log (amigo.nome)
console.log (`S{amigo.nome} pesa ${amigo.peso}Kg`)