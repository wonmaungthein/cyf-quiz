import React, { Component } from 'react';

import Question from './Question';

class Questions extends Component {

  selectAnswer = () => {

  }

  renderQuestion = (questionItem, index) => {
    return (
      <Question 
        key={index} 
        index={index} 
        question={questionItem.question} 
        correctAnswer={questionItem.correct_answer} 
        selectAnswer={this.selectAnswer} />
    );
  }

  render() {
    return (
      <div>
        { this.props.questions.map((questionItem, index) => this.renderQuestion(questionItem, index)) }
      </div>
    );
  }
}

export default Questions;
