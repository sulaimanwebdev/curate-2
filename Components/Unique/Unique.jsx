import React, {useState} from "react";

function Unique() {

  let img = "../Assets/unique/unique.png";
let imgMob = "../Assets/unique/uniqueMob.png";
let bottomImg1 = "../Assets/unique/bottom-uni (1).png";
let bottomImg2 = "../Assets/unique/bottom-uni (2).png";
let bottomImg3 = "../Assets/unique/bottom-uni (3).png";
let bottomImg4 = "../Assets/unique/bottom-uni (4).png";
let bottomImg5 = "../Assets/unique/bottom-uni (5).png";
let bottomImg6 = "../Assets/unique/bottom-uni (6).png";
let bottomImg7 = "../Assets/unique/bottom-uni (7).png";
let bottomImg8 = "../Assets/unique/bottom-uni (8).png";
let bottomImg9 = "../Assets/unique/bottom-uni (9).png";
let bottomImg10 = "../Assets/unique/bottom-uni (10).png";
let bottomImg11 = "../Assets/unique/bottom-uni (11).png";
let bottomImg12 = "../Assets/unique/bottom-uni (12).png";
let bottomMobile1 = "../Assets/unique/bottom-mobile (1).png";
let bottomMobile2 = "../Assets/unique/bottom-mobile (2).png";
let bottomMobile3 = "../Assets/unique/bottom-mobile (3).png";
let bottomMobile4 = "../Assets/unique/bottom-mobile (4).png";
let bottomMobile5 = "../Assets/unique/bottom-mobile (5).png";
let bottomMobile6 = "../Assets/unique/bottom-mobile (6).png";
let bottomMobile7 = "../Assets/unique/bottom-mobile (7).png";
let bottomMobile8 = "../Assets/unique/bottom-mobile (8).png";
let bottomMobile9 = "../Assets/unique/bottom-mobile (9).png";
let bottomMobile10 = "../Assets/unique/bottom-mobile (10).png";
let bottomMobile11 = "../Assets/unique/bottom-mobile (11).png";
let bottomMobile12 = "../Assets/unique/bottom-mobile (12).png";
let icon1 = "../Assets/unique/icon1.png";
let icon2 = "../Assets/unique/icon2.png";
let icon3 = "../Assets/unique/icon3.png";
let icon4 = "../Assets/unique/icon4.png";
let yoga = "../Assets/float/yoga.png";
let thunder = "../Assets/float/thunder.png";
let sleep = "../Assets/float/sleep.png";
let heart = "../Assets/float/heart.png";
let barMob = "../Assets/float/activity2.png";
let activity = "../Assets/float/activity.png";
  return (
    <div className="unique">
      <h2 className="title-top roboto">Our Ethos</h2>
      <h1 className="roboto title">Everyone's Biology Is Unique</h1>
      <p className="roboto sub-title">
        To get the best out of you, you've got to put the best into you. That's
        why we go the extra mile to source the most bioavailable form of each
        base nutrient to ensure your body is absorbing the levels it needs to
        have you feeling happier & healthier at every stage of life.
      </p>
      <div className="wrapper-uni">
        <div className="center-uni">
          <div className="left-uni">
            <img src={img} alt="" className="desk-un" />
            <img src={imgMob} alt="" className="mob-un" />
            <div className="float float1">
              <div className="left-float">
                <p className="bold-float roboto">Yoga</p>
              </div>
              <div className="right-float">
                <img src={yoga} alt="" />
              </div>
            </div>
            <div className="float float2">
              <div className="left-float">
                <p className="bold-float roboto">
                  <span className="light roboto">avg</span> 652{" "}
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
                  <span className="light roboto">avg</span> 5.3{" "}
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
                  <span className="light roboto">avg</span> 62{" "}
                  <span className="light roboto">bpm</span>
                </p>
              </div>
              <div className="right-float">
                <img src={heart} alt="" />
              </div>
            </div>
          </div>
          <div className="right-uni">
            <div>
              <h3 className="roboto">Anne’s Plan</h3>
              <h4 className="roboto">Nurse</h4>
            </div>

            <p className="roboto sub-title" style={{textAlign: 'left'}}>
              Anne is up early most mornings working long hours, does yoga to
              decompress and wants help with her energy and dry skin
            </p>
            <div className="row-div">
              <div className="row">
                <img src={icon1} alt="" />
                <p className="roboto">
                  <span>The Energy</span> - B12 for energy
                </p>
              </div>
              <div className="row">
                <img src={icon2} alt="" />
                <p className="roboto">
                  <span>The Zen One </span> - Ashwagandha for stress
                </p>
              </div>
              <div className="row">
                <img src={icon3} alt="" />
                <p className="roboto">
                  <span>Sunshine Ready</span> - Vitamin D for immunity
                </p>
              </div>
              <div className="row">
                <img src={icon4} alt="" />
                <p className="roboto">
                  <span>Botanical Beauty</span> - Biotin for Hair, Skin & Nails
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-uni">
          <img src={bottomImg5} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg1} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg2} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg3} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg4} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg11} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg9} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg6} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg7} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg8} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg10} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg12} className="bottom-img desk-uni" alt="" />
          <img src={bottomMobile1} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile2} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile3} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile4} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile5} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile6} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile7} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile8} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile9} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile10} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile11} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile12} className="bottom-img mobile-uni" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Unique;
