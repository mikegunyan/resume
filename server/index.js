const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const mysql = require('mysql');

const connection = {
  host: process.env.HOST || 'localhost',
  user: 'root',
  password: process.env.PASSWORD || '',
  database: 'crud'
};

let db;

const establishConnection = () => {
  const date = new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Denver', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });

  db = mysql.createConnection(connection);

  db.connect(err => {
    if (err) {
      console.log(`${date} ➡ MySQL ERROR! Re-establishing connection... ↙\n${err}`);
      setTimeout(establishConnection, 2000);
    } else {
      console.log(`${date} ➡ MySQL Database connected...`)
    }
  });

  db.on('error',(err) => {
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.log(`${date} ➡ MySQL ERROR! Re-establishing connection... ↙\n${err}`);
      establishConnection();
    } else {
      console.log(`${date} ➡ MySQL ERROR! Unable to connect...`)
    }
  });
}

let server = app.listen(port, () => {
  const date = new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Denver', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
  establishConnection();
  console.log(`${date} ➡ Server started! Listening on port:${port}...`)
});

const resetServer = (signal) => {
  const date = new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Denver', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
  console.log(`--------------\n${date} ➡ ${signal} signal received! Closing server...`)
  server.close(()=>{
    console.log(`${date} ➡ Server closed! Restarting server...`);
    server = app.listen(port, () => {
      establishConnection();
      console.log(`${date} ➡ Server restarted! Listening on port:${port}...`)
    });
  });
}

const closeProcess = (signal) => {
  const date = new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Denver', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
  console.log(`--------------\n${date} ➡ ${signal} signal received: Process Terminating...`)
  server.close(()=>{
    console.log(`${date} ➡ Server closed!`);
    db.end();
    console.log(`${date} ➡ MySQL closed!`);
    console.log(`${date} ➡ Process Terminated!`);
    process.exit(0)
  });
}

process.on('SIGINT', resetServer)
process.on('SIGTERM', closeProcess)

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/visitors', (req, res) => {
  const date = new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Denver', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
  const visitor = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (visitor !== '::1') {
    db.query(`INSERT IGNORE INTO visitors (visitor) VALUES (?)`, [visitor], (err, results) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        db.query('SELECT COUNT(*) AS count FROM visitors', (err, results) => {
          if (err) {
            console.log(err);
            res.sendStatus(500);
          } else {
            console.log(`--------------\n${date} ➡ Visitor: ${visitor}\n${date} ➡ Visitors: ${results[0].count}`)
            res.send(results);
          }
        });
      }
    });
  } else {
    db.query('SELECT COUNT(*) AS count FROM visitors', (err, results) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        console.log(`--------------\n${date} ➡ Visitor: ${visitor}\n${date} ➡ Visitors: ${results[0].count}`)
        res.send(results);
      }
    });
  }
})

app.get('/people', (req, res) => {
  db.query('SELECT * FROM people ORDER BY id DESC', (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
})

app.post('/people', (req, res) => {
  const { person } = req.body;
  db.query(`INSERT IGNORE INTO people (person) VALUES (?)`, [person], (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
})

app.put('/people', (req, res) => {
  const { id, person } = req.body;
  db.query('UPDATE people SET person = ? WHERE id = ?', [person, id], (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
})

app.delete('/people', (req, res) => {
  const { id } = req.body;
  db.query('DELETE FROM people WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
})

app.options('/people', (req, res) => {
  db.query('DELETE FROM people', (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
})
