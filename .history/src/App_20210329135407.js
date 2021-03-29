import React from 'react'
import avatar from './component/avatar.js'

import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <avatar />
        </header>
      </div>
    );
  }
}

export default App;
