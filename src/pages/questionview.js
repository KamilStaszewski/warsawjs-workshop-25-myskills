import React, { Component } from 'react';
import QuestionList from '../components/questionlist';
import Description from '../components/description';
import database from '../dummy/db.json';
import updateQuestions from '../utils/updateQuestions';


export default class QuestionView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       questions: []
    }
  }
  

  componentDidMount = () => {
    this.setState({
      questions: database.questions
    })
  }

  handleKeyPress = (id) => (event) => {
    const value = event.target.value

    const upd = updateQuestions(this.state, id, value);
    console.log(upd);
    console.log(value)
  }
  
  render() {
    const { questions } = this.state;
    console.log(this.state)
    return (
      <div>
        <Description />
        <QuestionList questions={questions} handleKeyPress={this.handleKeyPress}/>
      </div>
    )
  }
}
