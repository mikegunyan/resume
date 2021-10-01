const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
  db.query(`INSERT INTO people (person) VALUES (?)`, [person], (err, results) => {
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

const server = app.listen(port, () => {
  const date = new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Denver', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
  console.log(`${date} ➡ Server started! Listening on port:${port}...`)
});

const resetServer = (signal) => {
  const date = new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Denver', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
  console.log(`\n${date} ➡ ${signal} signal received! Closing server...`)
  server.close(()=>{
    console.log(`${date} ➡ Server closed! Restarting server...`);
    server.listen(port, () => {
      console.log(`${date} ➡ Server restarted! Listening on port:${port}...`)
    });
  });
}

const closeProcess = (signal) => {
  console.log(`\n${signal} signal received: Process Terminating! ${new Date()}`)
  server.close(()=>{
    process.exit(0)
  });
}

process.on('uncaughtException', resetServer)
process.on('unhandledRejection', resetServer)
process.on('SIGINT', resetServer)
process.on('SIGTERM', closeProcess)
