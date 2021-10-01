// require assests
const mysql = require('mysql');

// create a connection to database and assign to variable
const db = mysql.createConnection({
  host: process.env.HOST || 'localhost',
  user: 'root',
  password: process.env.PASSWORD || '',
  database: 'crud'
});

// call connect function on variable to connect
db.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`MySQL Database connected... ${new Date()}`)
  }
});

// export that connection and import it into server/index.js
module.exports = db;
