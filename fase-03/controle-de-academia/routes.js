const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => res.redirect('/instructors'));
routes.post('/instructors', (req, res) => res.send('instructors/index'));
routes.get('/instructors', (req, res) => res.render('instructors/index'));
routes.get('/instructors/create', (req, res) => res.render('instructors/create'));
routes.get('/members', (req, res) => res.render('members/index'));


routes.use((req,res) => res.status(404).render('about') )

module.exports = routes;