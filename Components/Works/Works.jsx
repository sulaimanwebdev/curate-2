import React from "react";
function Works() {
  return (
    <div id="works" className="works">
      <div className="title-div">
        <h1 className="roboto title">How It Works</h1>
        <img src='/Assets/under1.svg' alt="" className="underline" />
      </div>
      <p className="roboto sub-title" style={{lineHeight: "1.6"}}>
        The future of health is in the palm of your hand. 3 simple steps to
        optimise your health & make more out of your every day.
      </p>
      <div className="work-row">
        <div className="work-box">
          <img src='/Assets/works/work1.png' alt="" />
          <h2 className="roboto gradient-text" style={{fontSize: "25px", fontWeight: "400"}}>
            Download the <br /> Curate App
          </h2>
          <p className="roboto" style={{fontSize: "16px"}}>
            Our app is free to download from the Apple store in one simple click
          </p>
        </div>
        <div className="work-box">
          <img src="data:image/png;base64,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" alt=""/>
          <h2 className="roboto gradient-text" style={{fontSize: "25px", fontWeight: "400"}}>
            Analyse your health <br /> data for Free
          </h2>
          <p className="roboto" style={{fontSize: "16px"}}>
            In less than 90 seconds we will analyse your biometric data through
            our streamlined process.
          </p>
        </div>
        <div className="work-box">
          <img src='/Assets/works/work3.png' alt="" />
          <h2 className="roboto gradient-text" style={{fontSize: "25px", fontWeight: "400"}}>
            Receive your unique <br /> supplements{" "}
          </h2>
          <p className="roboto" style={{fontSize: "16px"}}>
            Tailor-made vitamins to optimise your health. Delivered to you on a
            monthly basis. Cancel anytime.
          </p>
        </div>
      </div>
      <div className="email-row">
        <div className="email-left">
          <h2 className="roboto">Newsletter Sign Up</h2>
          <p className="roboto">
            Join the personalised health and wellness revolution. We do not
            spam. We only educate.
          </p>
        </div>
        <form className="email-right" action="https://curatehealth.us18.list-manage.com/subscribe/post?u=42378f1f35ae04210a28591f2&amp;id=f0e55d62a2" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate="novalidate">
          <input className="emailonly" type="email" placeholder="Email Address" name="EMAIL" id="mce-EMAIL"/>
          <input className="submit button" type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" />
        </form>
      </div>
    </div>
  );
}

export default Works;
