// let nome = null
// let idade = null
// console.log(nome, typeof nome)
// console.log(idade, typeof idade)

// Como as variáveis foram declaradas, mas não foi atribuído nenhum tipo específico de dado, 
// mas sim deixado deliberadamente o valor como "null", 
//as variáveis foram reconhecidas apenas como objetos que podem assumir valor posteriomente. 

let nome = prompt("Qual é o seu nome?")
let idade = Number(prompt("Qual é a sua idade?"))

console.log(nome, typeof nome)
console.log(idade, typeof idade)

// Notei que após declarar as variáveis e elas trocaram o tipo de objeto para
// variáveis do tipo string e number, respectivamente.

console.log(`Olá, ${nome}, você tem ${idade} anos`)