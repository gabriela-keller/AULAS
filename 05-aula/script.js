console.log("oi")

// com array

var alunos = ["pedro", "tiago", "joão"]
var media = [7,8,6]

console.log ("o aluno:", alunos[1],"teve media:", media[1 ])


// com objeto
var estudante ={
    "Nome": "Gabriela",
    nota1 : 8,
    nota2 : 9,
    media : 8.5
}

console.log(estudante.Nome, estudante.media, estudante.nota1, estudante.nota2);
console.log(estudante.Nome, "=", estudante.media)

var cadeira ={
    nome: "cadeira muito boa",
    cor : "branca",
    tamanho: "para criança",
    preco : "200"
}

console.log (cadeira.nome)
console.log (cadeira.cor)
console.log(cadeira.preco)
console.log (cadeira.tamhano)
console.log(cadeira.nome,"=", cadeira.preco)

//relacionado as duas informação
console

//outra forma de acessar propriedade
console.log ("tamanho:", cadeira ["cor"])

var garrafa ={}
console.log (garrafa);
// adicionando novas propriedades
// em um objeto ja existente
     garrafa.preco = 3.50,
    garrafa.quantidade = "200ml",
    garrafa.tamanho = 2.5
    garrafa["validade"] = "1 ano"

console.log (garrafa);

// alterando o valor de uma propriedade
// que ja existe 
garrafa.preco = 2.99
garrafa["validade"] = "2anos"
console.log(garrafa);

//nova propriedade
var novapropriedade = "apelido"
garrafa[novapropriedade] = "gregrinho"
console.log(garrafa.apelido)

// cria função
var animal ={
    nome: "luke",
    especie: "lagarto",
    raca: "adidas",
    andar: function(){
        console.log("estou andando")
    },
    latir: function(){
      console.log("estou latindo")
    }
}

console.log("o nome é:", animal.nome)

animal.andar()
animal.latir()
