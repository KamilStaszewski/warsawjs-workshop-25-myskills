import React from 'react';

const Textquestion = ({question, type, id, handleKeyPress}) => {
    let questionHTML = <li key={id}>{question}</li>
  return (
      <div>
      {type === "text" ? questionHTML : null }
      {type === "text" ? <input type="text" onKeyPress={handleKeyPress} /> : null }
    </div>
  )
}

export default Textquestion;