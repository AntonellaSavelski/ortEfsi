//Mostrar el array original y el modificado con las raices. Como objetos.
const data = [2,3,5,12,54,5,-1,0,4,23,66,7];
let arrayFinal = [];

const data3 = data.concat(data);

for (let i = 0; i < data3.length; i++) {
    
    let obj = {
        orig: data3[i],
        mod: Math.sqrt(data3[i])
    };

    arrayFinal.push(obj);
}
console.log(arrayFinal);
