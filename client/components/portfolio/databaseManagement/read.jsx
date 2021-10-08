import React from 'react';

const Read = ({ people }) => {
  return (
    <div className="widget">
      <h3>Read</h3>
      <div className="crudOperations">
        {people.map((data) => (
          <div key={data.id}>{data.person}</div>
        ))}
      </div>
      <p>A read operation will happen automatically when the component is rendered or a change is detected in the state.</p>
    </div>
  );
};

export default Read;
