
import React, { Component } from "react";
import "../styles/App.css";

import BookList from "../containers/BookList";
import BookDetail from "../containers/BookDetail";

class App extends Component {
  render() {
    let style={
      "display":"flex",
      "flexDirection":"row",
      "color":"#67b581"
    }
    return (
      <div className="row" style={{color:"#67b581"}}>
        <h1>Books N' Roses: Appetite for Instruction</h1>
        <div style={style}>
        <BookList />
        <BookDetail />
        </div>
      </div>
    );
  }
}
export default App;
