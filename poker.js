const numeros = ['A',2,3,4,5,6,7,8,9,10, 'J','Q', 'K'];
const palos = ['Corazón', 'Trebol', 'Pica', 'Diamante'];
const baraja = [];
let numParNegro = 0;

for (let i = 0; i < numeros.length; i++) {
    num= numeros[i];
    for (let j = 0; j < palos.length; j++) {
        palo = palos[j];
        let color;
        if(palo == 'Trebol'||palo == 'Pica'){
            color = 'Negro'
            if (num % 2 == 0){
                numParNegro = numParNegro+1;
            }
        }
        else {
            color = 'Rojo'
        }
        baraja.push(
            {
                numero: num, 
                palo: palo,
                color: color
            }
        )
    }
}
//console.log('La cantidad de numeros pares y de color negro es', numParNegro);

const eliminados = [];

for (let i = 0; i < 6; i++) {

    const random = (baraja) => Math.round(Math.random()*baraja.length)
    const random1 = random(baraja);
    eliminados.push(baraja[random1]);
}
console.log(eliminados);