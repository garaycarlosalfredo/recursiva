import React, { Component } from 'react';
import logo from './logo.svg';
import recursivaLogo from './recursivaLogo.jpeg'
import node from './node.png'
import './App.css';


//Mis componentes
import Main from './components/views/Main';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={recursivaLogo} className="App-logo-recursiva" alt="logo" />
          <img src={node} className="App-logo-node" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>App realizada con React + NodeJs</h2>
        </div>        
        <Main></Main>
      </div>
    );
  }
}

export default App;
