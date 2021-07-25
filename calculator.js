const express = require("express");
const bodyParser = require("body-parser")  // to get access of POST data for manipulation

const app = express();

app.use(bodyParser.urlencoded({ extended: true } ));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res){

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let submit  = num1 + num2;
    res.send("The Result is = " + submit);
});


app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post('/bmiCalculator', (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = weight/(height * height);
    res.send("BMI value is = " + bmi);
});

// starting the server at port 3000
app.listen(3000, () => {
    console.log("Server started on port 3000..." );
});
 