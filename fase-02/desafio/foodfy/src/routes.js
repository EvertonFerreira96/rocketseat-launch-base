const express = require('express');

const foods = require('./foods');

const routes = express.Router();

routes.get('/', (req,res) => res.render('home', {foods}));
routes.get('/about', (req,res) => res.render('about'));
routes.get('/recipe', (req,res) => res.render('recipe', {foods}));
routes.get('/recipe/:id', (req,res) => {
  const { id } = req.params;
  const food = foods.find(f => f.id == id);
  return res.render('detail', {food});
});

module.exports = routes;