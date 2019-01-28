const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '192.168.254.103',
  user: 'nodetuts2',
  password: 'nodetuts2',
  database: 'tutorial'
});

module.exports = pool.promise();
