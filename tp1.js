const express = require("express");
const app = express();
const PORT = 3000;

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
    let arrayCartones = []
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
    let jugadores = [];
    jugadores = req.body.jugadores
    for (let i = 0; i < jugadores.length; i++) {
        console.log(`Carton ${i+1}:${req.body.jugadores[i]}`)        
    }
    res.send("Los jugadores ya tienen sus cartones asignados, comenzemos.");
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
