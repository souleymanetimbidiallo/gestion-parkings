const express = require('express');
const router = express.Router();

const parkingController = require('../controllers/parking');
const reservationController = require('../controllers/reservation');

router.post('/', parkingController.createParking);

router.put('/:id', parkingController.updateParking);

router.delete('/:id', parkingController.deleteParking);

router.get('/:id', parkingController.getOneParking);

router.get('/', parkingController.getParkings);

/**
 * Sous collection: Reservation
 */


router.post('/:id/reservations', reservationController.createReservation);

router.put('/:id/reservations/:idReservation', reservationController.updateReservation);

router.delete('/:id/reservations/:idReservation', reservationController.deleteReservation);

router.get('/:id/reservations/:idReservation', reservationController.getOneReservation);

router.get('/:id/reservations', reservationController.getReservations);

module.exports = router;