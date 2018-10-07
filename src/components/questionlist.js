import React from 'react';
import Questions from './questions'

const QuestionList = ({questions = []}) => {
  return (
    <section>
      <ol>
        {questions.map(question => 
            <Questions {...question} />
        )}    
      </ol>
    </section>
  )
}

export default QuestionList
