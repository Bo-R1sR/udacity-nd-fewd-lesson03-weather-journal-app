/* Global Variables */
const baseURLfront = 'http://api.openweathermap.org/data/2.5/weather?zip='
const baseURLend = ',us&appid='
const apiKey = '5cb581c5625b64992aff71a0cc2bf62a&units=imperial';

document.getElementById('generate').addEventListener('click', performAction);

function performAction() {
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    getWeather(baseURLfront, zipCode, baseURLend, apiKey)
        .then(function (data) {
            postData('/addWeatherData', {temperature: data.main.temp, date: newDate, userInput: feelings})
                .then(function (data) {
                    updateUI().then(r => console.log("Successful"));
                });
        })
}

const getWeather = async (baseURLfront, zipCode, baseURLend, apiKey) => {
    const res = await fetch(baseURLfront + zipCode + baseURLend + apiKey, {method: 'GET',});
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
}

const postData = async (url, data) => {
    console.log("postData " + JSON.stringify(data));
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header
        body: JSON.stringify(data)
    });

    try {
        await response.json();
    } catch (error) {
        console.log("error", error);
    }
}

const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const recentData = await request.json();
        document.getElementById('temp').innerHTML = recentData.temperature;
        document.getElementById('date').innerHTML = recentData.date;
        document.getElementById('content').innerHTML = recentData.userInput;

    } catch (error) {
        console.log("error", error);
    }
}


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1) + '.' + d.getDate() + '.' + d.getFullYear();