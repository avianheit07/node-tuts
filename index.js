const express = require('express');
// import express from 'express';

const app = express();

app.get('/greeting', (req, res) => {
  res.send({hi: 'Hellow World'});
});
app.get('/', (req, res) => {
  res.send('<h1> Welcome to Homepage</h1>');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
// localhost:5000
