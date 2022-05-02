const express = require("express");
const app = express();
const PORT = 3000;
let arrayCartones = []
let arrayCartonesCopia=[]
let cartonCopia;
let jugadores = []
let contadorCartones=0;
let vecPelotas = [];
const CANT_NUMEROS = 15;
let num = ObtenerBolilla(vecPelotas);

const process_data = () => {

    let x = 100;

    return {
        resultado: x
    };
};

const ObtenerBolilla = (vecPelotas)=>{
    let pelota = Math.floor(Math.random() * (99-1) + 1);

    while (vecPelotas[pelota] >= 1)
    {
        pelota = Math.floor(Math.random() * (99-1) + 1);
    }
    vecPelotas[pelota] = vecPelotas[pelota] + 1;

    return pelota;
}
app.use(express.json());

const ObtenerDecena = () =>{
    const decena = (num) => num === 100 ? 10 : Math.floor(num/10) +1;
    return decena;
}
const decenaCompleta = () =>{

}
	
app.post("/numero_aleatorio", function (req, res) {
	console.log(req.body)
    const min = 1;
	res.send(`${num}`);
});
app.post("/iniciar_juego", function (req, res) {
	console.log(req.body.cartones);
    for (let i = 0;i<req.body.cartones;i++) {
        let carton = []
        for (let j=0; j< CANT_NUMEROS;j++) {

            for (let a = 0; a < CANT_NUMEROS; a++) {
                if (num === carton[a]){
                    num = ObtenerBolilla(vecPelotas)
                }
            } 
            carton[j]= num;
        }
        contadorCartones=contadorCartones+1;
        arrayCartones.push(carton);
        cartonCopia = [...carton];
        arrayCartonesCopia.push(cartonCopia);
    }
    for(let i=0; i<100; i++){
        vecPelotas[i]=0;
    }
	res.send(arrayCartones);
});

app.get("/obtener_carton", function (req, res) {
    let jugador;
    jugador = req.body.jugador
    jugadores.push(jugador);

    res.send("El jugador ya tiene su carton asignado, ingrese otro jugador.");
    console.log(jugadores);
});

app.get("/cartones/:nombre?", function (req, res) {
    const articleName = req.params.nombre;

    if (articleName === undefined) {
        console.log(arrayCartones)
        res.send(arrayCartones)
    }
    else {
        for (let i = 0; i < jugadores.length; i++) {
            if(jugadores[i]=== articleName) {
                console.log(arrayCartones[i])
                res.send(arrayCartones[i])
            }
        }
    }
});

app.get("/sacar_numero", function (req, res) {
    let cartonGanador;
    let jugadorGanador = null;

    for (let i=0; i<contadorCartones;i++) {
        let contador = 0;
        let carton = arrayCartonesCopia[i];
        for (let a = 0; a < carton.length; a++) {
            let cartonVer = carton[a];
            if (num === cartonVer){
                cartonCopia[a] = -1;
            }
            cartonVer= cartonCopia[a];
            if(cartonVer === -1){
                contador = contador +1;
            }
        }
        if (contador === CANT_NUMEROS){
            arrayCartones[i] = cartonGanador;
            if (jugadores[i]== undefined){
            jugadorGanador = "Nadie tenía este tablero" 
            }
            else{
                jugadorGanador = jugadores[i];
            }
            break;
        }
    }
    console.log(`La pelota que salió es: ${num}`);
    if (jugadorGanador != null){
        res.send(`La pelota que salió es: ${num} El jugador que ganó es: ${jugadorGanador}. Felicitaciones!`);
    }
    else{
        res.send(`La pelota que salió es: ${num}`);
    }
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});