import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div class="social">
        <div class="btnsame btn1">
          <a href="https://github.com/vikas981" target="_blank">
            <i class="fa fa-github"></i>
          </a>
        </div>
        <div class="btnsame btn2">
          <a href="" target="_blank">
            <i class="fa fa-twitter"></i>
          </a>
        </div>
        <div class="btnsame btn3">
          <a
            href="https://www.linkedin.com/in/vikash-singh-962b19103/"
            target="_blank"
          >
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
        <div class="btnsame btn4">
          <a href="https://www.instagram.com/im_singhji/?hl=en" target="_blank">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Social;
