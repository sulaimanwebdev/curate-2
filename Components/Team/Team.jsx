import React from "react";
import TeamCirc from "/Components/TeamCirc/TeamCirc";

function Team() {
  return (
    <div id="experts" className="team-cont">
      <div className="team">
        <div className="text-team">
          <div className="title-div">
            <h1 className="roboto title">
              The Experts <br /> behind Curate
            </h1>
            <img src='/Assets/under2.svg' alt="" className="under" />
          </div>

          <p className="roboto sub-title" style={{lineHeight: "1.6"}}>
            Our team of market leading doctors, scientists, nutritionists and
            healthcare professionals with vast experience and a deep passion on
            what it takes to lead a healthy lifestyle.
          </p>
          <p className="roboto sub-title" style={{lineHeight: "1.6"}}>
            We share a common vision in improving the longevity and vitality of
            our customers. Helping people embrace a happier and healthier
            journey step by step, the world becomes a better place.
          </p>
        </div>
        <div className="team-grid">
          <TeamCirc
            img='/Assets/team/team (7).png'
            name="Dr James Morehen"
            title="Performance Nutritionist"
          />
          <TeamCirc img='/Assets/team/team (1).png' name="Lucy Web" title="Nutritional Therapist" />
          <TeamCirc
            img='/Assets/team/team (8).png'
            name="Dr Brian McGirr"
            title="Medical Officer"
          />
          <TeamCirc
            img='/Assets/team/team (2).png'
            name="Dr Warren Bradley"
            title="Performance Nutritionist"
          />
          <TeamCirc img='/Assets/team/team (6).png' name="Dr Nura Alwan" title="Medical Advisor" />
          <TeamCirc img='/Assets/team/team (3).png' name="Kevin Heath" title="Advisor" />
          <TeamCirc img='/Assets/team/team (4).png' name="John Sayers" title="Advisor" />
          <TeamCirc img='/Assets/team/team (9).png' name="Gary Robinson" title="Healthcare Advisor" />
          <TeamCirc img='/Assets/team/team (5).png' name="Jonathan Talbutt" title="Advisor" />
        </div>
      </div>
    </div>
  );
}

export default Team;
