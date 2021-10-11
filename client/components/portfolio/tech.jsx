import * as React from 'react';
import SiteMonitor from './siteMonitor/siteMonitor';
import HigherOrderFunction from './higherOrderFunction/higherOrderFunction';
import DatabaseManagement from './databaseManagement/databaseManagement';
import Checkers from './checkers/checkers';
import PyramidDescentPuzzle from './pyramidDescentPuzzle/pyramidDescentPuzzle';

const Tech = ({ tech, visitors,toggleMonitor }) => {
  if (tech === 'Site Monitor') {
    return (
      <div className="techBox">
        <SiteMonitor visitors={visitors} />
      </div>
    );
  }
  if (tech === 'Higher Order Components') {
    return (
      <div className="techBox">
        <HigherOrderFunction />
      </div>
    );
  }
  if (tech === 'Database Management') {
    return (
      <div className="techBox">
        <DatabaseManagement />
      </div>
    );
  }
  if (tech === 'Checkers') {
    return (
      <div className="techBox">
        <Checkers />
      </div>
    );
  }
  if (tech === 'Pyramid Descent Puzzle') {
    return (
      <div className="techBox">
        <PyramidDescentPuzzle toggleMonitor={toggleMonitor} />
      </div>
    );
  }
  return null;
};

export default Tech;
