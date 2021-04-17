import React from "react";

import { CVMenu, Sidebar } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="App" id="outer-container">
      <div className="hamburger-button-wrapper">
        <CVMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      </div>
      <div id="page-wrap" className="flex justify-content-start">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="full-width cv-content column">
          <div className="cv-content__about-me-container flex flex justify-content-center">
            <div className="cv-content__information-wrapper">
              <h1>ABOUT ME</h1>
              <p>
                Sebastian possesses strong, hands-on, knowledge of programming in Java, C#, ASP.NET, JavaScript, Swift, JQuery, the main SQL
                languages and various frameworks and libraries such as React,
                Redux, React-Context, ReactHooks, Angular4-6, Springboot,
                ReactiveX. Has a good understanding of technology trends and
                developments and is an expert at applying his programming skills
                to solve complex challenges. With his past employer, he was
                involved in several different projects. On a personal level, he
                has the strong listening skills needed to acquire and comprehend
                user requirements and is more than competent on independently
                working on most phases of development activities. His greatest
                strengths include being able to make an immediate impact on a
                project and having an eagerness to evolve existing systems and
                technology. Right now he would like to work for a company that
                offers its staff competitive pay, comprehensive benefits packages,
                and outstanding advancement opportunities.
              </p>
            </div>
          </div>
          <div className="cv-content__education-container flex flex justify-content-center">
            <div className="cv-content__information-wrapper">
              <h1>Education</h1>
              <div className="cv-content__education-container__item">
                <h2>CENFOTEC UNIVERSITY</h2>
                <span>2016 - 2021 | BS, Computer Science.</span>
              </div>
              <div className="cv-content__education-container__item">
                <h2>BRAIN STATION PROGRAM</h2>
                <span>2019-2019 | Certificate Course in web development, worked with</span>
                <span>technologies such as ReactJS, Java, Springboot and  mongoDB.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
