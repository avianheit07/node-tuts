import app from './App';

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err: []) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${PORT}`)
});
