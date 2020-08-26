// Laços de repetição - loop

// For - por declaraçõa
for (let a = 0; a < 10; a++) {
    console.log(`Repetindo pq ${a} é menor que 10`);
}

// while é movido por uma condiçõa
let i = 0;
while (i <= 10) {
    console.log(`Repetindo pq ${i} é menor ou igual a 10`);
    i++;
}

//forEach
let avengers = ['Ironman', 'Spiderman', 'Thor', 'Capitan América', 'Black Panther', 'Black Window']
avengers.forEach((value, key) => {
    console.log(`${value} na posição ${key}`)
});