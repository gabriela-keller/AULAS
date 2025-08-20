//interação com o usuario via prompt
//

// condicionais

// SE, SENÂO SE, SENÃO 
// IF, IF ELSE, ELSE

// var estaVivo = true

// if(estaVivo == true){
//     console.log("Parabens você esta vivo ")
// }
// else if(estaVivo == false){
//      console.log("infelizmente, esta morto")
// }
// else{
//     console.log("você não está nada, virou uma fantasma")
// }



//ESCOLHA / CASO
//SWITCH / CASE

// var corcamisa = "verde"

// switch(corcamisa){
//     case "azul":
//     console.log("você ganhou um voucher")
//     break

//     case "amarela":
//     console.log("você ganhou um body splhas")
//     break

//      case "vermelha":
//     console.log("você ganhou um brinde")
//     break

//     default:
//         console.log("cor de camisa invalida")
//         break

// }

// var nota = prompt ("qual a sua nota?")

// if(nota > 6){
//     console.log("Parabens você passou ")
// }
// else if(nota <= 5 && nota <= 6){
//      console.log("reprovado ")
// }
// else{
//     console.log(" recuperação ")
// }


var idade = prompt ("qual a sua idade?")
var idade2 = prompt ("qual a sua idade?")

var ingresso1, ingresso2

if(idade <= 17){

    ingresso1= 15
}
else if(idade >= 18 && idade <= 59){

     ingresso1 = 30
}
else if(idade >= 60){

     ingresso1 = 20
}

if(idade2 <= 17){

    ingresso2 = 15
}
else if(idade2 <= 17 && idade2 <= 59){

    ingresso2 = 30
}
else if(idade2 >= 60){

     ingresso2 = 20
}

var valorfinal = ingresso1 + ingresso2

console.log("o preço final foi:" + valorfinal)










