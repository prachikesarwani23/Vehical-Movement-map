// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Sample vehicle data
let vehicle = {
    latitude: 37.7749, // Starting point (San Francisco)
    longitude: -122.4194,
    route: []
};

// Simulate vehicle movement every 2 seconds
setInterval(() => {
    vehicle.latitude += (Math.random() - 0.5) * 0.001; // Random latitude change
    vehicle.longitude += (Math.random() - 0.5) * 0.001; // Random longitude change
    vehicle.route.push({ latitude: vehicle.latitude, longitude: vehicle.longitude });
}, 2000);

// API endpoint to get vehicle location and route
app.get('/api/vehicle', (req, res) => {
    res.json(vehicle);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
