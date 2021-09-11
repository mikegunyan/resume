import React, { useState } from 'react';
import UpdateModal from './updateModal';

const Update = ({ people }) => {
  const [updateModal, setUpdateModal] = useState(false);

  const toggleUpdateModal = () => {
    setUpdateModal(!updateModal);
  };

  return (
    <div className="widget">
      <h3>Update</h3>
      <div className="crudOperations">
        <UpdateModal updateModal={updateModal} people={people} toggleUpdateModal={toggleUpdateModal} />
        <button onClick={toggleUpdateModal}>Update People</button>
      </div>
      <p>Click "Update People" to open a modal and update a person.</p>
    </div>
  );
};

export default Update;
