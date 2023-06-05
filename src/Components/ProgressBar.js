// A component to display the progress bar
import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div>
      <h3>Progress: {progress}%</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
