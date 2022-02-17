
const parkings = require('../database/parkings.json');

exports.createParking = (req, res) => {
    parkings.push(req.body);
    res.status(200).json(parkings);
};

exports.updateParking = (req, res) => {
    const id = parseInt(req.params.id);
    let parking = parkings.find(parking => parking.id === id);
    parking.name = req.body.name;
    parking.city = req.body.city;
    parking.type = req.body.type;
    res.status(200).json(parking);
};

exports.deleteParking = (req, res) => {
    const id = parseInt(req.params.id);
    let parking = parkings.find(parking => parking.id === id);
    parkings.splice(parkings.indexOf(parking), 1);
    res.status(200).json(parkings);
};

exports.getParkings = (req, res) => {
    res.status(200).json(parkings)
};

exports.getOneParking = (req, res) => {
    const id = parseInt(req.params.id);
    const parking = parkings.find(parking => parking.id === id);
    res.status(200).json(parking);
};