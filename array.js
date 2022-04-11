const data = [2,3,5,12,54,5,-1,0,4,23,66,7];

const data2 = [];

// Multiplicar un numero por su anterior y restarle el siguiente.
for (let i = 0; i < data.length; i++) {
    let element = data[i];
    if (i== 0){
        element= 0 - data[i+1];
    }
    else if (i == data.length -1){
        element = data[i] * data[i-1] - 0;
    }
    else{
        element = data[i] * data[i-1] - data[i+1];
    }
    data2[i]= element;
}
//console.log(data2);

//Duplicar el array anterior y aplicarle la funcion raiz a todos los elementos.

const data3 = data.concat(data);

for (let i = 0; i < data3.length; i++) {

    data3[i] = Math.sqrt(data3[i]);
}
console.log(data3);
