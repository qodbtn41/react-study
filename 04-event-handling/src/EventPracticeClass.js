import React, { Component } from "react";

class EventPracticeClass extends Component {
  state = {
    message: "",
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>이벤트 연습</h1>
        <p>{message}</p>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          onChange={(e) => {
            console.log(e.target.value);
            this.setState({ message: e.target.value });
          }}
        />
        <button
          onClick={() => {
            alert(message);
            this.setState({
              message: "",
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPracticeClass;
