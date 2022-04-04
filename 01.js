const lista = [11, 33, 2, -1, 110, 99, 8];

function sort2(a, b) {return b-a;}

const results = lista.filter(x => x%2 !== 0).sort(sort2);

console.log(results[1]);





























