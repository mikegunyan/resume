import React, { useState } from 'react';
import DeleteModal from './deleteModal';

const Delete = ({ people }) => {
  const [deleteModal, setDeleteModal] = useState(false);

  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  return (
    <div className="widget">
      <h3>Delete</h3>
      <div className="crudOperations">
        <DeleteModal deleteModal={deleteModal} people={people} toggleDeleteModal={toggleDeleteModal} />
        <button onClick={toggleDeleteModal}>Delete People</button>
      </div>
      <p>Click "Delete People" to open a modal and delete a person.</p>
    </div>
  );
};

export default Delete;
