import React from "react";
import photo from "../../images/9A2A8274.JPG";
import Insta from "../../images/insta.png";
import Facebook from "../../images/facebook.png";
import LinkedIn from "../../images/linkedin.png";
import Email from "../../images/gmail.png";
import Github from "../../images/github.png";

const About = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="opening">
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 left">
          <img src={photo} className="head-shot" alt="hey" />
        </div>
        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 right">
          <h2 className="about-h2">Austin Holsinger</h2>
          <p className="about-p">Full Stack Web Developer</p>
          <p className="about-p2">20 year old with gray hair</p>
        </div>
        <div className="row">
          <p className="explain">
            "I took an early interest to web development at 15 years old. It
            felt like I found something I could do as a career one day. At 19,
            almost 5 years later, I attended The Coding Bootcamp at University
            of North Carolina in Charlotte, where I was able to drastically
            expand my knowledge and abilities. If you don't see me on the
            computer, expect me to be around friends, golfing, or eating."
          </p>
          <div className="social">
            <a href="https://www.instagram.com/aj.holsinger" target="blank_">
              <img className="instagram" src={Insta} alt="yeah" />
            </a>
            <a href="https://www.facebook.com/aj.holsinger" target="blank_">
              <img className="facebook" src={Facebook} alt="yeah" />
            </a>
            <a
              href="https://www.linkedin.com/in/aj-holsinger-8b83a815a/"
              target="blank_"
            >
              <img className="linkedin" src={LinkedIn} alt="yeah" />
            </a>
            <a href="https://www.github.com/aj.holsinger" target="blank_">
              <img className="github" src={Github} alt="yeah" />
            </a>
            <a href="mailto:ajholsinger@austinholsinger.com">
              <img className="email" src={Email} alt="yeah" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
