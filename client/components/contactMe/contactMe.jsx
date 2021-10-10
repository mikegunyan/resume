import React from 'react';

const ContactMe = ({ theme }) => {
  return (
    <div>
      <h1 className="contactMeHeader">Contact Me</h1>
      <div className={theme}>
        <div className="contactMe">
          <img src={`https://michaelgunyanresume.s3.us-west-2.amazonaws.com/images/light/email.png`} />
          <p>mrgunyan@gmail.com</p>
        </div>
        <div className="contactMe">
          <img src={`https://michaelgunyanresume.s3.us-west-2.amazonaws.com/images/light/linkedIn.png`} />
          <a href="https://www.linkedin.com/in/michael-gunyan" target="_blank">linkedin.com/in/michael-gunyan</a>
        </div>
        <div className="contactMe">
          <img src={`https://michaelgunyanresume.s3.us-west-2.amazonaws.com/images/light/github.png`} />
          <a href="https://github.com/mikegunyan" target="_blank">github.com/mikegunyan</a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
