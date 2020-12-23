const express = require('express');
const nunjucks = require('nunjucks');

const routes = require('./src/routes');

const server = express();


server.use(express.static('./src/public/css'));
server.use(express.static('./src/public/js'));
server.use(express.static('./src/public/img'));
server.use(express.static('./src/public/img/food'));
server.use(express.static('./src/public/img/modal'));

server.set('view engine', 'njk');

nunjucks.configure('src/views', {
  autoescape: false,
  express: server,
  watch: true,
  noCache: false
})

server.use(routes);

server.listen(3333,(req,res) => console.log('Server stated at door 3333 🚀'));
