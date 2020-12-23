const express = require('express');
const nunjucks = require('nunjucks');

const videos = require('./data');

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

server.get('/', (req, res) => {
  const about = {
    avatar_url: 'https://avatars1.githubusercontent.com/u/43793144?s=460&u=5f795ff1e9ef996d7de92234ae543f35a4bb2f21&v=4',
    name: 'Everton Ferreira',
    role: 'Alumni - Rocketseat',
    description: 'Focado em trazer o melhor ensino para desenvolvedores <a target="_blank" href="https://www.linkedin.com/in/evertonferreira96/">Rocketseat</a>',
    links: [{ name: 'gitHub', url: 'https://github.com/EvertonFerreira96'},
            { name: 'Instagram', url: 'https://www.instagram.com/_eferreira/'},
            { name: 'Linkedin', url: 'https://www.linkedin.com/in/evertonferreira96/'}
           ]
      }
  return res.render('about', {about})});

  server.get('/portfolio', (req, res) => res.render('portfolio', {items: videos }));

  server.get('/video/:id', (req,res) => {
    const {id} = req.params;
    const video = videos.find((i) => i.id == id);
    return video ? res.render('video', {item: video}) : res.json({message: 'Video not Found'});
  })


server.use((req,res) => res.status(404).render('about') )

server.listen(5000);

