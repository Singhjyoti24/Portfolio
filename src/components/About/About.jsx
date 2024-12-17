import React from 'react'
import img from '../../assets/Jyoti_img.jpeg';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="left">
        <img src={img} alt="Jyoti's Image" />
      </div>
      <div className="right">
        <h2>About Me</h2>
        <p>
          Working as an Associate Software Engineer at Accenture, where I work on cutting-edge technologies and contribute to impactful projects. I am passionate about software development, with expertise in Full-Stack development, particularly in JavaScript, React, and the MERN stack.
        </p>
        <p>
          At Accenture, I am part of dynamic teams, working on client projects where I handle frontend development, API integrations, and contribute to enhancing application performance.
        </p>
        <p>
          Beyond coding, I am a chess enthusiast, music lover, and enjoy engaging in creative activities. I believe in continuous learning and strive to keep up with the latest technologies and trends in the software development industry.
        </p>
      </div>
    </div>
  )
}

export default About