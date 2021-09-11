import React from 'react';

const ContactCard = () => {
  return (
    <div className="contactCard">
      <div className="contactBox">
        <img src="images/location.png" />
        <p className="location">Casper, Wyoming, U.S.A.</p>
      </div>
      <div className="contactBox">
        <img src="images/telephone.png" />
        <p className="telephone">307-797-3567</p>
      </div>
      <div className="contactBox">
        <img src="images/email.png" />
        <p className="email">mrgunyan@gmail.com</p>
      </div>
      <div className="contactBox">
        <img src="images/linkedIn.png" />
        <a className="linkedIn" href="https://www.linkedin.com/in/michael-gunyan" target="_blank">linkedin.com/in/michael-gunyan</a>
      </div>
      <div className="contactBox">
        <img src="images/github.png" />
        <a className="github" href="https://github.com/mikegunyan" target="_blank">github.com/mikegunyan</a>
      </div>
    </div>
  );
};

export default ContactCard;
