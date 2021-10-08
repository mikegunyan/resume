import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './create';
import Read from './read';
import Update from './update';
import Delete from './delete';

const DatabaseManagement = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    let mounted = true;
    axios.get('/people')
      .then(({ data }) => {
        if (mounted) {
          setPeople(data);
        }
      })
      .catch((err) => console.log(err));
      return () => mounted = false;
  }, [people]);

  return (
    <div className="skillColumnTwo">
      <h1 className="skillTitle">Database Management</h1>
      <h3>MySql</h3>
      <div className="databaseWidgets">
        <Create />
        <Read people={people} />
        <Update people={people} />
        <Delete people={people} />
      </div>
      <h3>Description</h3>
      <p>The main purpose of utilizing a database in an application is to create a persistant storage. Persistant storage is the data that outlives the application and will return when the application is restarted. There are four basic operations to persistant storage.</p>
      <p>Create is the operation which stores the data in the database. Read is the operation which reads the data from the database. Update is the operation which changes the data in the database. Delete is the operation which removes the data from the database.</p>
      <p>These are known as CRUD operations and are an industry standard.</p>
    </div>
  );
};

export default DatabaseManagement;
