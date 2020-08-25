var welcome = "Hello JavaScript automated full stack from QA"
document.getElementById("welcome").append(welcome);
console.log(welcome);

var idade = prompt("Qual a sua idade");

if (idade >= 18) {
    console.log('Posso ir ao show do Iron Maiden. Corram para as colinas');
} else if (idade >= 12) {
    console.log('Posso ir ao show do Jonas Brothers')
} else {
    console.log('Fique em casa hahaha!')
}

var ingresso = prompt("Qual o tipo de ingresso");

switch (ingresso) {
    case 'vip':
        console.log('Irei ficar no camarote');
        break;
    case 'premiun':
        console.log('Irei ficar na pista premiun');
        break;
    case 'pipoca':
        console.log('Irei ficar na arquibancada');
        break;
    default:
        console.log('Outro caso não definido');
        break;
}