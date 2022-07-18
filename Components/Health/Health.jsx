import React from "react";
function Health() {
  return (
    <div className="health-cont">
      <div className="health">
        <div className="left-health">
          <div className="title-div">
            <h1 className="roboto title">
              Your <span className="gradient-text">Unique</span> <br /> Health
              Offering
            </h1>
            <img src='/Assets/under2.svg' alt="" className="under" />
          </div>
          <p className="roboto sub-title">
            Personalised vitamins? We hear about them all the time. We've taken
            5 steps forward and developed a platform that allows us to analyse
            your unique health data and pinpoint where we can add a personalised
            recommendation that is unique to you and your body.
          </p>
          <ul className="list">
            <li className="roboto" style={{fontSize: "16px", fontWeight: "400"}}>Non-GMO</li>
            <li className="roboto" style={{fontSize: "16px", fontWeight: "400"}}>
              Free from artificial colours <br /> and sweeteners
            </li>
            <li className="roboto" style={{fontSize: "16px", fontWeight: "400"}}>BRC Certified</li>
            <li className="roboto" style={{fontSize: "16px", fontWeight: "400"}}>
              Tailor-made for <br /> you and your body
            </li>
            <li className="roboto" style={{fontSize: "16px", fontWeight: "400"}}>GMP Approved</li>

            <li className="roboto" style={{fontSize: "16px", fontWeight: "400"}}>UK Made</li>
          </ul>
        </div>
        <div className="right-health">
          <img src='/Assets/hands-img.png' alt="" />
        </div>
      </div>
    </div>
  );
}

export default Health;
