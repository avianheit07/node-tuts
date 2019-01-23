const mongodb      = require('mongodb');
const MongoClient  = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://avianheit:uRszrpppnLDs3G2@cluster0-v2xag.mongodb.net/test?retryWrites=true')
  .then( result => {
    console.log('Connected');
    _db = result.db();
    callback();
  })
  .catch( err => {
    console.log(err);
    throw err;
  })
}

const getDb = () => {
  if (_db) {
    return _db;
  }

  throw 'No Database Found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
