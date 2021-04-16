import React from 'react';

import { CVMenu, Sidebar } from './components';

import './App.scss';

const App = () => {
  // return (
  //   <div className="flex">
  //       <Sidebar />
  //   </div>
  // );
  return (
    <div className="App" id="outer-container">
      <div className="hamburger-button-wrapper">
        <CVMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
      <div id="page-wrap" className="flex justify-content-start">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="flex justify-content-center full-width">
          <h1>DA BABY!?!?!?!?</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
