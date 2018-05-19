import React, { Component } from 'react';
import './App.css';

import questionList from './data/questions.json';

import Questions from './components/Questions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CYF Quiz</h1>
        </header>
        <Questions questions={questionList.results}/> 
      </div>
    );
  }
}

export default App;
