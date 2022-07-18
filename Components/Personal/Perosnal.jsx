import React from "react";
import PersonalBox from "/Components/PerosnalBox/PersonalBox";
function Perosnal() {
  return (
    <div className="personal-cont">
      <div className="personal">
        <div className="left-pern">
          <div className="title-div">
            <h1 className="roboto title">
              Personalised <br /> Precision Wellness
            </h1>
            <img src='/Assets/under2.svg' className="under" alt="" />
          </div>
          <p className="roboto sub-title">
            We experience a truly outdated healthcare system today. Curate's
            mission is to bring preventative healthcare to the comfort of your
            home. Customers no longer need to visit multiple doctors for results
            or evaluations.
          </p>
        </div>
        <div className="right-pern">
          <PersonalBox
            img='/Assets/personal1.png'
            text={[
              "Complement your natural gut flora",
              "Includes fibres to increase your natural gut bacteria",
            ]}
            head="Probiotic"
          />
          <PersonalBox
            img='/Assets/personal2.png'
            text={[
              "Formulated to support both men and women providing 100% of your recommended daily intake.",
              "Supports overall health and wellbeing.",
            ]}
            head="Multivitamin"
          />
        </div>
      </div>
    </div>
  );
}

export default Perosnal;
