// require assests
const mysql = require('mysql');

// create a connection to database and assign to variable
const db = mysql.createConnection({
  // host: '54.241.75.143',
  user: 'root',
  // password: 'crudroot',
  database: 'crud'
});

// call connect function on variable to connect
db.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySql DB')
  }
});

// export that connection and import it into server/index.js
module.exports = db;
