import React from 'react';
import Questions from './questions';

const QuestionList = ({questions = [], handleKeyPress}) => {
  return (
    <section>
      <ol>
        {questions.map(question => 
            <Questions {...question} handleKeyPress={handleKeyPress}/>
        )}    
      </ol>
    </section>
  )
}

export default QuestionList
