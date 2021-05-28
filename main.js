//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro


//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E





let idade = 26
if (idade>18){
  console.log("Show, você é maior de idade, não se esqueça de votar em 2022")
} else{
  console.log("Poxa, você ainda não é maior de idade.")
}

let humano = "sim"
console.log  ("você é humano", true)


let mês = 05
if ((mês ===01) || (mês ===12)){
    console.log("você faz aniversário em Janeiro ou Dezembro") 
} else{
    console.log("você não faz aniversário em Janeiro ou Dezembro")
}


let nome = "Breno"
if(nome.substring(0,1) === "R"){
    console.log("seu nome começa com a letra R")
} else{
    console.log("seu nome não começa com a letra R, e sim B")
}

let SeuNome = "Bader"
if ((SeuNome.length > 6) || (SeuNome.substring(0,1) === "E")){
    console.log("seu sobrenome tem mais de 6")
} 
    else{
    console.log("seu sobrenome não tem mais de 6 letras, e não começa com a letra E")
}