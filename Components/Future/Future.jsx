import React from "react";
function Future() {
  return (
    <div className="future-cont">
      <div className="future">
        <div className="future-left">
          <div className="float float1">
            <div className="left-float">
              <p className="bold-float roboto">HITT</p>
            </div>
            <div className="right-float">
              <img src='/Assets/float/hit.png' alt="" />
            </div>
          </div>
          <div className="float float2">
            <div className="left-float">
              <p className="bold-float roboto">
                <span className="light roboto">avg</span> 861{" "}
                <span className="light roboto">cal</span>
              </p>
            </div>
            <div className="right-float">
              <img src='/Assets/float/thunder.png' alt="" />
            </div>
          </div>
          <div className="float float3">
            <div className="left-float">
              <img src='/Assets/float/sleep.png' alt="" />
            </div>
            <div className="right-float">
              <p className="bold-float roboto">
                <span className="light roboto">avg</span> 7.2{" "}
                <span className="light roboto">hours</span>
              </p>
            </div>
          </div>
          <div className="float float4">
            <div className="left-float">
              <img src='/Assets/float/activity.png' alt="" />
            </div>
            <div className="right-float">
              <p className="bold-float roboto">Activity</p>
              <img src='/Assets/float/activity3.png' alt="" />
            </div>
          </div>
          <div className="float float5">
            <div className="left-float">
              <p className="bold-float roboto">
                <span className="light roboto">avg</span> 73{" "}
                <span className="light roboto">bpm</span>
              </p>
            </div>
            <div className="right-float">
              <img src='/Assets/float/heart.png' alt="" />
            </div>
          </div>
          <img src='/Assets/future.png' alt="" className="future-img future-desk" />
          <img src='/Assets/future-mob.png' alt="" className="future-img future-mob" />
        </div>
        <div className="future-right">
          <div className="title-div">
            <h1 className="roboto title">
              The Future is <br />
              Personal
            </h1>
            <img src='/Assets/under2.svg' className="under" alt="" />
          </div>
          <p className="roboto" style={{fontSize: "16px"}}>
            Curate’s mission is to be the one-stop platform for long-term health
            mapping. It empowers individuals to obtain multiple biological
            measurements, identify and measure symptoms and determine how these
            change over time by utilising personalised recommendations. Curate
            utilises test data, big data assets such as community data, and
            smart wearable data to formulate its personalised recommendations.
            <br />
            <br />
            Consumers no longer need to visit multiple doctors or labs for
            evaluations, results in interpretation and recommendations.
          </p>
          <img src='/Assets/apple-btn.svg' alt="" className="future-mob apple-future" />
        </div>
      </div>
    </div>
  );
}

export default Future;
