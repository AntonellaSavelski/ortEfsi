const express = require("express");
const app = express();
const PORT = 3000;
let arrayCartones = []
let jugadores = []

const process_data = () => {

    let x = 100;

    return {
        resultado: x
    };
};

app.use(express.json());
	
app.post("/numero_aleatorio", function (req, res) {
	console.log(req.body)
    const min = 1;
	res.send([Math.round(Math.random() * (req.body.num- min) + min)])
});
app.post("/iniciar_juego", function (req, res) {
	console.log(req.body.cartones);
    for (let i = 0;i<req.body.cartones;i++) {
        let carton = []
        for (let j=0; j<10;j++) {
            let num = Math.round(Math.random() * (99- 1) + 1)
            for (let a = 0; a < 10; a++) {
                if (num === carton[a]){
                    num = Math.round(Math.random() * (99- 1) + 1)
                }
            } 
            carton[j]= num;
        }
        arrayCartones.push(carton);
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
    let jugadorGanador;
    let num = Math.round(Math.random() * (99- 1) + 1)

    for (let i=0; i<arrayCartones.length;i++) {
        let contador = 0;
        let carton =arrayCartones[i];
        for (let a = 0; a < carton.length; a++) {
            let cartonVer = carton[a];
            if (num === cartonVer){
                carton[a] = -1;
            }
        }
        for (let j = 0; j < carton.length; j++) {
            let cartonVer = carton[j];
            if(cartonVer= -1){
                contador = contador +1;
                if (contador = 10){
                    arrayCartones[i] = cartonGanador;
                    jugadores[i]= jugadorGanador;
                    console.log(arrayCartones[i])
                    break;
                }
            }
        }
    }
    res.send("El jugador que ganó es:", jugadorGanador, ". Felicitaciones!");
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
