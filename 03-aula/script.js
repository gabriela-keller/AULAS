 console.log ("Vamos que vamos")

 // Laços de Repetição

 // Para = for
//  for(var i = 0; i < 5; i++){
//     console.log ("Ainda estou aqui ")
//      console.log ("Ainda estou aqui ")
//  }

//  console.log ("Acabou de repetir");

// enquanto = while

// var contagem = 0 
// while (contagem < 10){
//     console.log("estou aqui ainda")
//     contagem ++
// }
//      var numero = prompt ("digite um numero")
//      for(var i = 0; i < numero; i++){
//     console.log ("contagem:", i)
//  }

    // var senha = "0"
    // var senhacorreta = 49

    // while(senha != "senhacorreta"){
    //     var senha = prompt ("digite uma senha: (Dica: menor que 50 e maior que 48")
        
    // }

    // console.log("você entrou!!")
    
    //funções = function

    // function bemvindo(){
    //     var nome = prompt("Nome:")
    //     console.log("ola,", nome)
    // }
// // chama a função
//     bemvindo()
// // função com parametros
//     function calcularidade(idade){
//         alert("Sua idade é:"+ idade)
//     }

//     calcularidade (18)
//     calcularidade (100)

    // exercicio 3

    // function maior(valor1,valor2){
    //     if (valor1 > valor2){
    //         console.log("o primeiro valor é maior");
    //     }
    //     else if (valor1 < valor2){
    //         console.log("o segundo valor é maior")
    //     }
    //     else{
    //         console.log ("os valores são iguais")
    //     }
    // }
    // var numero1 = prompt("digite um numero: ")
    // var numero2 = prompt ("digite outro numero: ")
    
    // maior(Number(numero1),  Number (numero2))
 

    //funções com retorno

    function soma (valor1, valor2){
       let resultado = valor1 + valor2

       return resultado
    }
   soma(7,6)

   var valorsoma= soma (7,6)

   console.log ("a soma deu:" ,  valorsoma);
