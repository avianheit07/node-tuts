const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'nodetuts2',
  password: 'nodetuts2',
  database: 'tutorial'
});

module.exports = pool.promise();
