import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [person, setPerson] = useState('');
  const create = (event) => {
    event.preventDefault();
    axios.post('/people', { person })
      .then(() => {
        setPerson('');
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (event) => {
    setPerson(event.target.value);
  };

  return (
    <div className="widget">
      <h3>Create</h3>
      <form className="crudOperations">
        <input onChange={handleChange} value={person}></input>
        <button onClick={create}>Create</button>
      </form>
      <p>Enter a name and click "Create" to complete a create operation.</p>
    </div>
  );
};

export default Create;
