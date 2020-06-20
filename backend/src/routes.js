const express = require('express');
const PatientController = require('./controllers/PatientController');
const PsychologistController = require('./controllers/PsychologistController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');

routes.post('/sessions', SessionController.create);

routes.get('/patients', PatientController.index);
routes.get('/psychologists', PsychologistController.index);

module.exports = routes;