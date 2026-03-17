import React from 'react';

import './Question.css';

function Question({ children }) {
  return (
    <div className="question-container">
      <p className="question-content">{children}</p>
    </div>
  );
}

export default Question;
