const express = require('express');
const path = require('path');

const parkingRoutes = require("./routes/parking.routes");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

// Static directory path
app.use(express.static(path.join(__dirname, '/dist/frontend')));

//API root
app.use("/api/parkings", parkingRoutes);


// 404 Handler
app.use((req, res, next) => {
    next(createError(404));
});
// Base Route
app.get('/', (req, res) => {
    res.send('invaild endpoint');
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/frontend/index.html'));
});
// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

module.exports = app;