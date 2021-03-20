import React from "react";
import headerimg from "../img/header-img.png";
import cardone from "../img/card-one.png";
import cardtwo from "../img/card-two.png";
import cardthree from "../img/card-three.png";
import cardfour from "../img/card-four.png";
import cardfive from "../img/card-five.png";
import { Fade } from "react-awesome-reveal";

export const Header = () => {
  return (
    <header className="header row mx-0 align-items-center justify-content-center justify-content-lg-between mt-4">
      <div className="col-lg-5 p-0 mb-5">
        <Fade direction="down">
          <h1>Profitability on the Rise</h1>
          <h6>Trading platform that supports your financial goals</h6>
          <button className="btn btn-blue-btn">Start Trading —it`s free</button>
        </Fade>
      </div>
      <div className="col-lg-5 p-0 mb-5">
        <Fade direction="down">
          <img src={headerimg} alt="header" />
        </Fade>
      </div>

      <div className="col-12 p-0 my-5">
        <h4>The latest from Olymp Trade</h4>
        <h5>New features, latest webinars and more...</h5>
        <div className="education col-10 col-sm-7 col-md-5 col-lg-10 col-xl-8 p-0 my-5 mx-auto mx-lg-2">
          <Fade direction="right">
            <div className="card" style={{ backgroundColor: "#172331" }}>
              <img src={cardone} alt="card-img" />

              <div className="text">
                <h5> 30 New Assets</h5>
              </div>
            </div>
          </Fade>
       

          <div className="card p-3" style={{ backgroundColor: "#1FBF75" }}>
            <img src={cardtwo} alt="card-img" />

            <div className="text">
              <h5>Experience Points</h5>
              <h6>
                Our new rewards system offers active traders even more perks and
                privileges
              </h6>
            </div>
          </div>
         
             <Fade direction="left">
          <div className="card">
            <img src={cardthree} alt="card-img" />

            <div className="text">
              <h5> Profit Line</h5>
              <h6>
                A tool to help you identify the break-even point of a trade
              </h6>
            </div>
          </div>
          </Fade>

          <Fade direction="left">

          <div className="card">
            <img src={cardfour} alt="card-img" />

            <div className="text">
              <h5> The advisor</h5>
              <h6>
                Analyzes several indicators according to the trading strategies
              </h6>
            </div>
          </div>
          </Fade>
          <Fade direction="left">
          <div className="card">
            <img src={cardfive} alt="card-img" />

            <div className="text">
              <h5> New Year's Tournament Lucky Star</h5>
              <h6>Join the holiday contest for $280,000 in prizes!</h6>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </header>
  );
};
