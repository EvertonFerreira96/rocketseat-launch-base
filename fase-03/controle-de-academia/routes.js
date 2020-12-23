const express = require('express');
const routes = express.Router();

const videos = require('./data');

routes.get('/', (req, res) => {
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

  routes.get('/portfolio', (req, res) => res.render('portfolio', {items: videos }));

  routes.get('/video/:id', (req,res) => {
    const {id} = req.params;
    const video = videos.find((i) => i.id == id);
    return video ? res.render('video', {item: video}) : res.json({message: 'Video not Found'});
  })

module.exports = routes;