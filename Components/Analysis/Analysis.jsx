import React from "react";
function Analysis() {
  return (
    <div id="analysis" className="analysis">
      <div className="left-analysis">
        <img src='/Assets/phone-ana.png' className="phone" alt="" />
      </div>
      <div className="right-analysis">
        <div className="title-div">
          <h1 className="roboto title">
            Unlock Your Free <br />
            <span className="">Health Analysis</span>
          </h1>
          <img src='/Assets/under2.svg' alt="" className="under" />
        </div>
        <p className="roboto sub-title" style={{lineHeight: "1.6"}}>
          A one-stop platform for your long term health. Empowering individuals
          to understand their biometric data & best serve personalised
          recommendations. We have created a range of services that aim to serve
          stability in your day to day lives.
        </p>
        <ul className="list">
          <li className="roboto" style={{fontSize: "16px !important", fontWeight: "400"}}>Personalised Vitamins</li>
          <li className="roboto" style={{fontSize: "16px !important", fontWeight: "400"}}>Health Data Analysis</li>
          <li className="roboto" style={{fontSize: "16px !important", fontWeight: "400"}}>At-Home Testing</li>
          <li className="roboto" style={{fontSize: "16px !important", fontWeight: "400"}}>Mental Health Programmes</li>
          <li className="roboto" style={{fontSize: "16px !important", fontWeight: "400"}}>Nutrition Guidance</li>
        </ul>
        <img className="apple-btn" src='/Assets/apple-btn.svg' alt="" />
      </div>
    </div>
  );
}

export default Analysis;
