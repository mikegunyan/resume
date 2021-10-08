import React, { useState } from 'react';
import axios from 'axios';

const UpdateModal = ({ updateModal, people, toggleUpdateModal }) => {
  const [selectedPerson, setSelectedPerson] = useState({
    id: 0,
    person: 'Select Person to Update...'
  });
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const changeSelectedPerson = (event) => {
    setSelectedPerson({
      id: Number(event.target.name.split(' ')[0]),
      person: event.target.name.split(' ')[1]
    })
  };

  const update = () => {
    axios.put('/people', {
      id: selectedPerson.id,
      person: input
    })
      .then(() => {
        setSelectedPerson({
          id: 0,
          person: 'Select Person to Update...'
        });
        setInput('');
      })
      .catch((err) => console.log(err));
  };

  if (!updateModal) {
    return null;
  }
  return (
    <div className="modalBackground">
      <div className="modalBox">
        <h2>Update</h2>
        <div>
          {selectedPerson.person}
          <input onChange={handleChange} value={input}></input>
          <button onClick={update}>Update</button>
        </div>
        {people.length === 0 ? 'There are no people to delete...' : null}
        <div className="modalScroll">
          {people.map((data) => (
            <button
              className="updateButton"
              name={`${data.id} ${data.person}`}
              key={data.id}
              onClick={changeSelectedPerson}
            >{data.person}</button>
          ))}
        </div>
        <button onClick={toggleUpdateModal}>Exit</button>
      </div>
    </div>
  );
};

export default UpdateModal;
