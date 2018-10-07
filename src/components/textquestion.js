import React from 'react';

const Textquestion = ({question, type, id, handleKeyPress}) => {
    let textQuestion = 
    <li key={id}>
        <label>
            {question}
            <input type="text" onChange={handleKeyPress(id)} />
        </label>
    </li>
  return (
        <div>
            {type === "text" ? textQuestion : null }
        </div>
  )
}

export default Textquestion;