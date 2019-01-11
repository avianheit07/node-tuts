const express = require('express');
const fetch = require('node-fetch');
// import express from 'express';

const app = express();

app.get('/greeting', (req, res) => {
  res.send({hi: 'Hellow World'});
});
app.get('/', (req, res) => {
  res.send('<h1> Welcome to Homepage</h1>');
});
// https://rallycoding.herokuapp.com/api/music_albums
// function fetchAlbum() {
//   fetch('https://rallycoding.herokuapp.com/api/music_albums')
//   .then(res => res.json())
//   .then(json => console.log(json));
// }

app.get('/async', (req, res) => {
  fetchAlbum(function(json_obj) {
    res.send(json_obj);
  })
});
async function fetchAlbum(callback) {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
  const json = await res.json();
  callback(json);
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
// localhost:5000
