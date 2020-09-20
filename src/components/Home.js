import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1>
          Vikash <mark>Singh</mark>
        </h1>
        <ReactTypingEffect
          className="typingeffect"
          text={["A Software Developer"]}
          speed={100}
          eraseDelay={900}
        />
        <div className="hr_line">
          <div className="hr_inner"></div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Home;
