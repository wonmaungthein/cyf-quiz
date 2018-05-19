import React from 'react';

const Question = (props) => {
  return (
    <div>
      <p>{`${props.index + 1}. ${props.question}`}</p>
      <button onClick={() => props.selectAnswer()}>True</button>
      <button onClick={() => props.selectAnswer()}>False</button>
    </div>
  );
}

export default Question;
