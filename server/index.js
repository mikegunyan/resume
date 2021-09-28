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
  console.log(`Listening on port:${port}...`)
});

const closeProcess = async (signal) => {
  console.log(`\n${signal} signal received: Process Terminating!`)
  await db.end(async (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Disconnected from MySql DB!')
        await server.close(() => {
          console.log('Server closed!');
        })
        console.log('Process Terminated!')
      }
      process.exit(signal === 'SIGINT' || signal === 'SIGTERM' ? 0 : 1)
    });
}
process.on('uncaughtException', closeProcess)
process.on('unhandledRejection', closeProcess)
process.on('SIGINT', closeProcess)
process.on('SIGTERM', closeProcess)