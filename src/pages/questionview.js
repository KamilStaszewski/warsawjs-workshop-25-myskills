import React, { Component } from 'react';
import QuestionList from '../components/questionlist';
import Description from '../components/description';
import data from '../dummy/db.json'


export default class QuestionView extends Component {
  render() {
    return (
      <div>
        <Description />
        <QuestionList questions={data.questions}/>
      </div>
    )
  }
}
