import React from 'react';

const Experience = ({ darkMode }) => {
  return (
    <div className={darkMode ? 'darkSection' : 'section'}>
      <h2 className={darkMode ? 'darkHeader' : 'header'}>Applications</h2>
      <h3 className={darkMode ? 'darkHeader' : 'header'}>Croxy</h3>
      <div className="appDescription">An item viewing and shopping application.</div>
      <div className="contactBox">
        <img src={`https://michaelgunyanresume.s3.us-west-2.amazonaws.com/images/${darkMode ? 'dark' : 'light'}/github.png`} />
        <a className={darkMode ? 'github dark' : 'github'} href="https://github.com/Chill-Crocs/image-service" target="_blank">github.com/Chill-Crocs/image-service</a>
      </div>
      <ul>
        <li>Designed an image viewing carousel using React and Javascript.</li>
        <li>Utilized MongoDB to store and retrieve data with API requests.</li>
        <li>Built a proxy server to display my service and three others.</li>
        <li>Utilized Docker container to build an image of my service and proxy.</li>
        <li>Uploaded image to AWS EC2</li>
      </ul>
      <h3 className={darkMode ? 'darkHeader' : 'header'}>Understock</h3>
      <div className="appDescription">An item viewing and shopping application.</div>
      <div className="contactBox">
        <img src={`https://michaelgunyanresume.s3.us-west-2.amazonaws.com/images/${darkMode ? 'dark' : 'light'}/github.png`} />
        <a className={darkMode ? 'github dark' : 'github'} href="https://github.com/J-EQUAL-MC-SQUARED/reviews" target="_blank">github.com/J-EQUAL-MC-SQUARED/reviews</a>
      </div>
      <ul>
        <li>Legacy code micro-service including reviews section with images.</li>
        <li>Refactored database and scaled to production level traffic.</li>
        <li>Deployed to AWS EC2.</li>
      </ul>
      <h3 className={darkMode ? 'darkHeader' : 'header'}>Checkers</h3>
      <div className="appDescription">An interactive game application.</div>
      <div className="contactBox">
        <img src={`https://michaelgunyanresume.s3.us-west-2.amazonaws.com/images/${darkMode ? 'dark' : 'light'}/github.png`} />
        <a className={darkMode ? 'github dark' : 'github'} href="https://github.com/mikegunyan/checkers" target="_blank">github.com/mikegunyan/checkers</a>
      </div>
      <ul>
        <li>Designed all the logic involved with the rules of the game.</li>
        <li>Created a welcome modal to start a new or saved game.</li>
        <li>Utilized MongoDB to save and access games.</li>
      </ul>
      <h2 className={darkMode ? 'darkHeader' : 'header'}>Work Experience</h2>
      <ul>
        <li>Staff Sergeant / Military Police</li>
        <li>United States Marine Corps Reserves, Billings, MT | 2011 - Present</li>
        <li>Attend drill once per month and annual training for two weeks per year, receive and pass on orders, complete training exercises, maintain all equipment associated with training, maintain physical fitness, supervise and train a platoon of 30 to 40 Marines.</li>
      </ul>
      <ul>
        <li>Equipment Operator / Welder's Assistant</li>
        <li>Reeb Welding, Casper, WY | 2019 - 2020</li>
        <li>Operate forklifts and similar equipment to deliver company assets and parts to welders on company property and on other job sites. Assist welders while making welds to include all prep work and cleanup.</li>
      </ul>
    </div>
  );
};

export default Experience;
