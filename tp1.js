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
	console.log(req.body)
    const arrayCartones = [];
    const carton = [];
    for (let i = 0; i < req; i++) {
        let carton = { 
            for (let i = 0; i < 10; i++) {
                Math.round(Math.random() * (10- 1) + 1)
                
            }
            numeroDeCarton: i,
        };
       
        arrayCartones.push(carton);
    
    }
	res.send(arrayCartones)
});

app.get("/mi_endpoint", function (req, res) {
    res.send("respuesta");
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
