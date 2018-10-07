import React from 'react'

const Textquestion = ({question, type}) => {
    let questionHTML = <li>{question}</li>
  return (
      <div>
      {type === "text" ? questionHTML : null }
    </div>
  )
}

export default Textquestion;