import React from 'react';

import './Question.css';

const Question = (props) => {

  let isCorrectText;

  if (props.isCorrect === true) {
    isCorrectText = 'Well done!';
  }

  if (props.isCorrect === false) {
    isCorrectText = 'Sorry, that\'s the wrong answer.';
  }

  return (
    <div>
      <p>{`${props.index + 1}. ${props.question}`}</p>
      <button onClick={() => props.selectAnswer('True', props.index)}>True</button>
      <button onClick={() => props.selectAnswer('False', props.index)}>False</button>
      <p className="is-correct-text">{isCorrectText}</p>
    </div>
  );
}

export default Question;
