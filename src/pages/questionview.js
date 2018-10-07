import React, { Component } from 'react';
import QuestionList from '../components/questionlist';
import Description from '../components/description';
import database from '../dummy/db.json'

export default class QuestionView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       questionsData: [],
       keypress: ""
    }
  }
  

  componentDidMount = () => {
    this.setState({
      questionsData: database.questions
    })
  }

  handleKeyPress = (event) => {
    this.setState({
      keypress: event.target.value
    })
  }
  
  render() {
    const { questionsData } = this.state
    return (
      <div>
        <Description />
        <QuestionList questions={questionsData} handleKeyPress={this.handleKeyPress}/>
      </div>
    )
  }
}
