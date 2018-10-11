import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1>Hej</h1> */}
          <StyledButton>CSS-less button</StyledButton>
        </header>
      </div>
    );
  }
}

export default App;


// {
//   "plugins": ["babel-plugin-styled-components"]
// }

