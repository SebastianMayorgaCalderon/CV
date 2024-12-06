import React from "react";

import { CVMenu, Sidebar, ExperienceItem } from "./components";

import "./App.scss";

const App = () => {
  const experienceInformation = [
    {
      year: 2021,
      name: 'Gorilla Logic (Current position)', 
      position: 'Software Developer', 
      descriptionList: [
        {
          jobDescription: 'Collaborate in the design and development of web and backend solutions for complex projects using React, React Hooks, Node.js, and Express.js. Responsible for architectural improvements and ensuring code quality.',
          key: 0
        }
      ]
    },
    {
      year: 2021,
      name: 'Proximity', 
      position: 'Web Developer', 
      descriptionList: [
        {
          jobDescription: 'Led full-stack development initiatives, creating scalable web applications and backend systems. Utilized technologies like React, React Hooks, Node.js, and Express.js to deliver high-quality solutions for multiple projects.',
          key: 0
        }
      ]
    },
    {
      year: 2020,
      name: 'One Consulting Group', 
      position: 'Software Developer', 
      descriptionList: [
        {
          jobDescription: 'Developed full-stack software solutions tailored to client needs, enabling digital transformation. Expertise in Node.js, Express.js, and React with TypeScript for dynamic web applications.',
          key: 0
        }
      ]
    },
    {
      year: 2020,
      name: 'Konrad Group', 
      position: 'Software Developer', 
      descriptionList: [
        {
          jobDescription: 'Worked closely with clients to deliver high-quality marketing and business applications. Proficient in ReactJS, SCSS, Adobe Experience Manager 6.4, and Node.js to create seamless user experiences.',
          key: 0
        }
      ]
    },
    {
      year: 2019,
      name: 'Konrad Group', 
      position: 'Associate Software Developer', 
      descriptionList: [
        {
          jobDescription: 'Contributed to the development of various client projects, including a banking application built with Swift 5. Focused on delivering secure and efficient solutions.',
          key: 0
        }
      ]
    }
  ];
  
  
  return (
    <div className="App" id="outer-container">
      <div className="hamburger-button-wrapper">
        <CVMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      </div>
      <div id="page-wrap" className="flex justify-content-start align-items-stretch">
        <div className="sidebar-wrapper align-items-stretch">
          <Sidebar />
        </div>
        <div className="full-width cv-content column">
          <div className="cv-content__about-me-container flex flex justify-content-center">
            <div className="cv-content__information-wrapper">
              <h1>ABOUT ME</h1>
              <p>
                Sebastian possesses strong, hands-on, knowledge of
programming in Node JS, ExpressJS, Deno, FireBase, Java,
C#, ASP.NET, JavaScript, Swift, JQuery, the main SQL
languages and various frameworks and libraries such as
React, Redux, React-Context, ReactHooks, Angular12,
Springboot, ReactiveX, React Native, Next JS 13, Entity
Framework, Graph Ql, Fastify, Express, Prisma. Has a good
understanding of technology trends and developments and
is an expert at applying his programming skills to solve
complex challenges. On a personal level, he has the strong
listening skills needed to acquire and comprehend user
requirements and is more than competent on independently
working on most phases of development activities
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
                <span>technologies such as ReactJS, Java, Springboot and mongoDB,
Node JS, Express js, Deno</span>
              </div>
            </div>
          </div>
          <div className="cv-content__experience-container flex flex justify-content-center">
            <div className="cv-content__experience-wrapper">
              <h1>WORKING EXPERIENCE</h1>
              {experienceInformation.map((item) => (<ExperienceItem key={item.name} {...item}/>))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
