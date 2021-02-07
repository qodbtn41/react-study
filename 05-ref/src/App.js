import React, { Component } from "react";
import "./App.css";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <>
        <ScrollBox
          ref={(ref) => {
            this.box = ref;
          }}
        />
        <button onClick={() => this.box.scrollToBottom()}>맨 밑으로</button>
      </>
    );
  }
}

export default App;
