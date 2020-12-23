const express = require('express');
const nunjucks = require('nunjucks');

const routes = require('./routes');

const server = express(); 


server.use(express.static('./public/css'));
server.use(express.static('./public/js'));

server.set('view engine', 'njk');


nunjucks.configure('views', {
  autoescape: false,
  express: server,
  watch: true,
  noCache: false
});


server.use(routes);

server.use((req,res) => res.status(404).render('about') )

server.listen(5000, () => console.log('started at 5000 port 🚀') );

