# Weather-Journal App Project

## Overview

This project combines the data available from the api of openweathermap.org for a specific zip code and lets you 
save the temperature of this area with your feeling and the current date.

## Instructions

You need to have node.js with the modules express, body-parser and cors installed and let the server run.
With the default configuration you can access the page at http://localhost:8000.
There you enter your zip code and your feeling. Afer you click on the button generate
it will fetch the temperature for your zip, add your feeling, send it to the node.js server
and get the saved data to modify the ui.