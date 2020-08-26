// let avangers = new Array();
// // uma ou outra
// let avangers = [];

let avangers = ['Homem de ferro', 'Capitão América', 'Thor'];

console.log(avangers);

avangers.push('Hulk'); // add um novo item
console.log(avangers);

avangers.push('Homem Aranha');
console.log(avangers);

// avangers.pop(); // remove o último registro do array
// avangers.shift(); // remove o primeiro registro do array

let indice = avangers.indexOf('Homem Aranha');
console.log(indice);
avangers.splice(indice);

avangers.push('Viuva Negra');
avangers.push('Gavião Arqueiro');
console.log(avangers);

let newAvangers = ['Homem Aranha', 'Capitão Marvel', 'Miss Marvel', 'Panteira Negra'];
let result = avangers.concat(newAvangers); // concatena 2 array
console.log(result);