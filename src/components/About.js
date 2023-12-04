import React from 'react';
import styled from 'styled-components';
import Icon4 from '../images/icon4.png';
import Icon2 from '../images/icon2.png';
import Icon3 from '../images/icon3.png';
import myResume from '../images/resume.pdf';
import '../styles.css';

const Button = styled.a`
  display: inline-block;
  margin-right: 10px;
  padding: 20px 20px;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  background-color: #222;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 254, 238, 0.3);
  }
`;

const About = () => (
  <section className="about-section" id="about">
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        A dedicated Full Stack Developer passionate about crafting seamless and
        efficient applications. My journey into tech began with a degree in
        Mathematics and Computer Science, cultivating a foundation in
        problem-solving and analytical thinking. My educational journey includes
        completing a comprehensive Full-Stack Web Development program at
        Microverse. This experience not only honed my technical skills but also
        enriched my collaborative prowess through diverse project work. I have
        spent more than 1300+ hours mastering algorithms, data structures, and
        full-stack development while simultaneously developing projects with
        Ruby, Rails, JavaScript, React, and Redux. I&apos;ve engaged in
        collaborations with remote developers from around the world and
        participated in numerous group projects.
      </p>
      <Button
        href={myResume}
        target="_blank"
        rel="noopener noreferrer"
        type="button"
      >
        Get My Resume
      </Button>
      <div className="tech-stack">
        <div className="frontend-tech">
          <img src={Icon3} alt="icon" className="icon" />
          <h2>Front-end </h2>
          <ul className="list">
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>HTML</li>
          </ul>
        </div>
        <div className="backend-tech">
          <img src={Icon2} alt="icon" className="icon" />
          <h2>Back-end</h2>
          <ul className="list">
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>PostgreSQL</li>
            <li>RSpec</li>
            <li>Jest</li>
          </ul>
        </div>
        <div className="professional">
          <img src={Icon4} alt="icon" className="icon" />
          <h2>Professional</h2>
          <ul className="list">
            <li>Remote Pair-Programming</li>
            <li>Teamwork</li>
            <li>Collaboration</li>
            <li>Dev Tools</li>
            <li>Git&Github</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
