import React from "react";
import css from "./section.module.css";
import resources from '../../../resources/index'
import TeamMember from "./TeamMember";

const Section4 = () => {
  const teamData = [
    {
      image: resources.home.team_1,
      name: "Muhammad Faizan",
      title: "Machine Learning Expert",
    },
    {
      image: resources.home.team_2,
      name: "Aleena Akbar",
      title: "App Developer",
    },
    {
      image: resources.home.team_3,
      name: "Muhammad Junaid",
      title: "Front end Develpoer",
    },
    {
      image: resources.home.team_4,
      name: "Hafiz Irtaza",
      title: "Heavy Developer",
    },
  ];
  return (
    <div className={css.section4}>
      <div className={css.div1}>
        <h4>Our Team</h4>
        <h2>The People Behind FTVc</h2>
        <p>
          Intrinsicly strategize cutting-edge before interoperable applications
          incubate extensive expertise through integrated intellectual capital.
        </p>
      </div>
      <div className={css.div2}>
      {
        teamData.map((data, index)=>{
          return(
            <TeamMember key={index} data = {data} />
          )
        })
      }
      </div>
    </div>
  );
};

export default Section4;
