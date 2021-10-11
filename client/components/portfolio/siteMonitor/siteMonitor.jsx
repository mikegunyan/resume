import React from 'react';

const SiteMonitor = ({ visitors }) => {
  return (
    <div className="skillColumnTwo">
      <h1 className="skillTitle">Site Monitor</h1>
      <div className="siteMonitor">
        <div className="columnHeader">IP</div>
        <div className="columnHeader">Time Zone</div>
        <div className="columnHeader">City</div>
        <div className="columnHeader">Region</div>
        <div className="columnHeader">Country</div>
        <div className="columnHeader">Latitude</div>
        <div className="columnHeader">Longitude</div>
      </div>
      {visitors.map((visitor, index) => (
        <div key={index} className="siteMonitor">
          <div className={index % 2 === 0 ? 'darkRow' : 'light'}>{visitor.ip}</div>
          <div className={index % 2 === 0 ? 'darkRow' : 'light'}>{visitor.timezone}</div>
          <div className={index % 2 === 0 ? 'darkRow' : 'light'}>{visitor.city}</div>
          <div className={index % 2 === 0 ? 'darkRow' : 'light'}>{visitor.region}</div>
          <div className={index % 2 === 0 ? 'darkRow' : 'light'}>{visitor.country}</div>
          <div className={index % 2 === 0 ? 'darkRow' : 'light'}>{visitor.ll[0]}</div>
          <div className={index % 2 === 0 ? 'darkRow' : 'light'}>{visitor.ll[1]}</div>
        </div>
      ))}
    </div>
  );
};

export default SiteMonitor;
