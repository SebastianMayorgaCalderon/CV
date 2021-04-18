import React from "react";


import "./ExperienceItem.scss";

const ExperienceItem = ({ year, name, possition, descriptionList }) => {
  return (
    <div className="experience-item-wrapper flex justify-content-start aling-items-start">
      <div className="experience-item-wrapper__year-container">
        <h2>{year}</h2>
      </div>
      <div className="experience-item-wrapper__experience-information-wrapper">
        <h2>{name}</h2>
        <span>{possition}</span>
        <ul>
          {descriptionList.map((item) => (<li key={item.key}>{item.jobDescription}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceItem;
