import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

function Educations(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return (
            <DegreeCard key={degree.alt_name} degree={degree} theme={theme} />
          );
        })}
      </div>
    </div>
  );
}

export default Educations;
