import React, { useState } from 'react';

const Section = ({ section }) => {
  const [certView, setCertView] = useState('cert');
  const changeCertView = () => {
    if (certView === 'cert') {
      setCertView('certZoom');
    } else {
      setCertView('cert');
    }
  }
  if (section === 0) {
    return (
      <div className="section">
        <p>I am a family man and I am passionate about making life fun and exciting for both me and my family. I’ve had the privilege of serving as a Marine and still currently serve in the reserves. Now, I’m looking forward to a future as a software developer.</p>
        <p>For most of my life I have enjoyed solving problems and find satisfaction in achieving my goals. I love working with numbers and clever challenges intrigue me. It’s also very fun to work with a team and learn from people and all their unique backgrounds.</p>
      </div>
    );
  } else if (section === 1) {
    if (certView === 'cert') {
      return (
        <div className="section">
          <h3 className="header">Advanced Software Engineering Immersive</h3>
          <ul>
            <li>Hack Reactor</li>
            <li>2021</li>
          </ul>
          <img onClick={() => changeCertView()} className={certView} src="images/certificateSEIHackReactor.jpg" />
          <h3 className="header">General Studies</h3>
          <ul>
            <li>Southern New Hampshire University</li>
            <li>2019 - 2020</li>
          </ul>
        </div>
      );
    }
    return (
      <div className="section">
        <h3 className="header">Advanced Software Engineering Immersive</h3>
        <img onClick={() => changeCertView()} className={certView} src="images/certificateSEIHackReactor.jpg" />
      </div>
    );
  } else if (section === 2) {
    return (
      <div className="section">
        <h2 className="header">Applications</h2>
        <h3 className="header">Croxy</h3>
        <div className="appDescription">An item viewing and shopping application.</div>
        <div className="contactBox">
          <img src="images/github.png" />
          <a className="github" href="https://github.com/Chill-Crocs/image-service" target="_blank">github.com/Chill-Crocs/image-service</a>
        </div>
        <ul>
          <li>Designed an image viewing carousel using React and Javascript.</li>
          <li>Utilized MongoDB to store and retrieve data with API requests.</li>
          <li>Built a proxy server to display my service and three others.</li>
          <li>Utilized Docker container to build an image of my service and proxy.</li>
          <li>Uploaded image to AWS EC2</li>
        </ul>
        <h3 className="header">Understock</h3>
        <div className="appDescription">An item viewing and shopping application.</div>
        <div className="contactBox">
          <img src="images/github.png" />
          <a className="github" href="https://github.com/J-EQUAL-MC-SQUARED/reviews" target="_blank">github.com/J-EQUAL-MC-SQUARED/reviews</a>
        </div>
        <ul>
          <li>Legacy code micro-service including reviews section with images.</li>
          <li>Refactored database and scaled to production level traffic.</li>
          <li>Deployed to AWS EC2.</li>
        </ul>
        <h3 className="header">Checkers</h3>
        <div className="appDescription">An interactive game application.</div>
        <div className="contactBox">
          <img src="images/github.png" />
          <a className="github" href="https://github.com/mikegunyan/checkers" target="_blank">github.com/mikegunyan/checkers</a>
        </div>
        <ul>
          <li>Designed all the logic involved with the rules of the game.</li>
          <li>Created a welcome modal to start a new or saved game.</li>
          <li>Utilized MongoDB to save and access games.</li>
        </ul>
        <h2 className="header">Work Experience</h2>
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
  } else {
    return (
      <div className="section">
        <p>On html page if I give name in double quotes then it is not getting reflected on page. It displays a blank string. I tried with escape() function but that didn't work. So what is the way to display a string in double quotes.</p>
        <p>On html page if I give name in double quotes then it is not getting reflected on page. It displays a blank string. I tried with escape() function but that didn't work. So what is the way to display a string in double quotes.</p>
      </div>
    );
  }
};

export default Section;
