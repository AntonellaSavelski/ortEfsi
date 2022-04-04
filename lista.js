// CODIGO QUE NO FUNCIONA 
var lista=[11, 33, 2, -1, 110, 99, 8];
var numMayor = 0;
var segundoMayor = 0;

for (let i = 0; i < lista.length; i++) {
    let e = lista[i];
    if (e % 2 !=0 && e> numMayor){
        numMayor= lista[i];
    }
    else if (e % 2 !=0 && e <numMayor && e>segundoMayor){
        segundoMayor = lista[i];
    }
    console.log(segundoMayor);
}

for (let i = 0; i < lista.length; i++) {
    let element = lista[i];
    if (element % 2 !==0){
       if (element> numMayor){
            numMayor= element;
           console.log(element);
        } 
   }
}