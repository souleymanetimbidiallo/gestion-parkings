
const reservations = require('../database/reservations.json');

exports.createReservation = (req, res) => {
    reservations.push(req.body);
    res.status(200).json(reservations);
};

exports.updateReservation = (req, res) => {
    const id_parking = parseInt(req.params.id);
    const id_reservation = parseInt(req.params.idReservation);
    let reservation = reservations.find(reservation =>
        reservation.parkingId ===  id_parking && reservation.id === id_reservation
    );
    reservation.parking = req.body.parking;
    reservation.parkingId = req.body.parkingId;    
    reservation.city = req.body.city;
    reservation.clientName = req.body.clientName;
    reservation.vehicle = req.body.vehicle;
    reservation.licensePlate = req.body.licensePlate;
    reservation.checkin = req.body.checkin;
    reservation.checkout = req.body.checkout;

    res.status(200).json(reservation);
};

exports.deleteReservation = (req, res) => {
    const id_parking = parseInt(req.params.id);
    const id_reservation = parseInt(req.params.idReservation);
    let reservation = reservations.find(reservation =>
        reservation.parkingId ===  id_parking && reservation.id === id_reservation
    );
    reservations.splice(reservations.indexOf(reservation), 1);
    res.status(200).json(reservations);
};

exports.getReservations = (req, res) => {
    const id_parking = parseInt(req.params.id);
    const allReservations = reservations.filter(reservation => reservation.parkingId === id_parking);

    res.status(200).json(allReservations);
};

exports.getOneReservation = (req, res) => {
    const id_parking = parseInt(req.params.id);
    const id_reservation = parseInt(req.params.idReservation);
    const reservation = reservations.find(reservation =>
        reservation.parkingId ===  id_parking && reservation.id === id_reservation
    );
    res.status(200).json(reservation);
};