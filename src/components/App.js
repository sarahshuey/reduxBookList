import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
      <BookList />
      <BookDetail />
      </div>
    );
  }
}

export default App;
