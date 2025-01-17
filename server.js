// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

app.listen(port, () => {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
})

// Routes
app.get('/all', function (req, res) {
    res.send(projectData)
})
app.post('/addWeatherData', addWeatherData)

function addWeatherData(req, res) {
    projectData = {
        temperature: req.body.temperature,
        date: req.body.date,
        userInput: req.body.userInput
    }

    res.send(projectData);
}
