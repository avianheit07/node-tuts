const express = require('express');
// import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'Hellow World'});
});

app.listen(5000);

// localhost:5000
