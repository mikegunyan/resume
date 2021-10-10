import React from 'react';
import axios from 'axios';

const DeleteModal = ({ deleteModal, people, toggleDeleteModal }) => {
  const deleteOne = (event) => {
    axios.delete('/people', {
      data: {
        id: Number(event.target.name)
      }
    })
      .catch((err) => console.log(err));
  };

  const deleteAll = () => {
    axios.options('/people')
      .catch((err) => console.log(err));
  };

  if (!deleteModal) {
    return null;
  }
  return (
    <div className="modalBackground">
      <div className="modalBox">
        <h2>Delete</h2>
        <p>Delete person by clicking on person below.</p>
        <button onClick={() => {deleteAll(); toggleDeleteModal();}}>Delete All</button>
        {people.length === 0 ? 'There are no people to delete...' : null}
        <div className="modalScroll">
          {people.map((data) => (
            <button
              className="updateButton"
              name={data.id}
              key={data.id}
              onClick={people.length > 1 ? deleteOne : () => {deleteAll(); toggleDeleteModal();}}
            >{data.person}</button>
          ))}
        </div>
        <button onClick={toggleDeleteModal}>Exit</button>
      </div>
    </div>
  );
};

export default DeleteModal;
