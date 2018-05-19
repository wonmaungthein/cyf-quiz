import React, { Component } from 'react';

import Question from './Question';

class Questions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      answers: [...Array(15)],
      questions: [],
    }
    fetch('https://opentdb.com/api.php?amount=15&category=9&type=boolean')
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({
        questions: data.results,
      });
    })
  }

  selectAnswer = (answer, index) => {

    const answersCopy = this.state.answers.slice();
    const correctAnswer = this.state.questions[index].correct_answer;
    answersCopy[index] = answer === correctAnswer;

    this.setState({answers: answersCopy});
  }

  renderQuestion = (questionItem, index) => {
    return (
      <Question 
        key={index} 
        index={index} 
        question={questionItem.question} 
        correctAnswer={questionItem.correct_answer}
        selectAnswer={this.selectAnswer} 
        isCorrect={this.state.answers[index]}/>
    );
  }


  render() {

    return (
      <div>
        { this.state.questions.map((questionItem, index) => this.renderQuestion(questionItem, index)) }
      </div>
    );
  }
}

export default Questions;
