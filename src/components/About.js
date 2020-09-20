import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">About Me</h1>
        <div className="hr_line line2">
          <div className="inner2"></div>
        </div>
        <h2 className="abouthead">
          Vikash <mark className="mark2">Singh</mark>
        </h2>
        <p>Software Developer</p>
        <br></br>
        <p className="p10">
          I was born in 1998. I live in Delhi and work in Noida as a Software
          Developer. I’ve been a Junior developer for more than 1 years.I’ve
          mostly worked professionally with Java, Django and Python but also a
          little bit with Ruby, Perl and PHP.I like building new stuff and work
          with other people – nothing really interesting is ever built alone!
        </p>
        <div className="Edu">
          <div class="back1 back2">
            <i class="fa fa-book i1 i3"></i>
          </div>
        </div>
        <h3>Education</h3>
        <div className="vr_line">
          <div className="vr_inner inn1"></div>
          <div className="vr_inner inn2"></div>
        </div>
        <h4>B.Tech in CSE</h4>
        <p className="p1">DGI, Noida</p>
        <p className="p1">
          <i class="fa fa-calendar i2"></i>Aug 2015 - 2019
        </p>
        <h4>12th</h4>
        <p className="p1">Govt. Sarvodya co-ed sr sec School </p>
        <p className="p1">
          <i class="fa fa-calendar i2"></i>May 2015
        </p>

        <h3 class="sk_head">Skills</h3>
        <div class="sk">Java</div>
        <div class="sk s2">Flask</div>
        <div class="sk s3">Spring Boot</div>
        <div class="sk s4">React</div>
        <div class="sk s5">Django</div>
        <div class="sk s6">Python</div>
      </div>
    );
  }
}
export default About;
