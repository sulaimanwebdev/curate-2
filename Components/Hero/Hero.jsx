import React, {useState} from "react";
function Hero() {

  const [apple, setapple] = useState('/Assets/apple-btn.svg')
  const [hero, sethero] = useState('/Assets/hero.png')
  const [running, setrunning] = useState('/Assets/float/running.png')
  const [thunder, setthunder] = useState('/Assets/float/thunder.png')
  const [sleep, setsleep] = useState('/Assets/float/sleep.png')
  const [heart, setheart] = useState('/Assets/float/heart.png')
  const [barMob, setbarMob] = useState('/Assets/float/bar-mob.png')
  const [activity, setactivity] = useState('/Assets/float/activity.png')
  const [graph, setgraph] = useState('/Assets/hero-graph.png')
  return (
    <div className="hero-cont">
      <div className="hero">
        <div className="left-hero">
          <h1 className="inter">
            Your Health Starts
            <br /> With What's <span className="gradient-text">Inside</span>
          </h1>
          <p className="roboto desktop-hero" style={{lineHeight: "27px"}}>
            The world’s first and most personalised supplements curated using
            real-time health data. Curate analyses your health data to offer an
            accurate, personalised and bespoke vitamin solution for health
            optimisation.
          </p>
          <p className="roboto hero-mobile" style={{lineHeight: "27px"}}>
            The world’s first and most personalised supplements curated using
            real-time health data. Curate analyses your health data to offer an
            accurate, personalised and bespoke vitamin solution for health
            optimisation.
          </p>

          <img src={apple} alt="" />
        </div>
        <div className="right-hero">
          <img src={graph} alt="" className="graph-hero" />
          <div className="float float1">
            <div className="left-float">
              <p className="bold-float roboto">Running</p>
            </div>
            <div className="right-float">
              <img src={running} alt="" />
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
              <img src={thunder} alt="" />
            </div>
          </div>
          <div className="float float3">
            <div className="left-float">
              <img src={sleep} alt="" />
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
              <img src={activity} alt="" />
            </div>
            <div className="right-float">
              <p className="bold-float roboto">Activity</p>
              <img src={barMob} alt="" />
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
              <img src={heart} alt="" />
            </div>
          </div>
          <img className="hero-img" src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
