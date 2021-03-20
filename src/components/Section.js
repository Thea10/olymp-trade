import React from "react";
import sectiontwo from "../img/section-two.png";
import meta from "../img/meta.png";
import mac from "../img/mac.png";
import apple from "../img/apple.png";
import store from "../img/store.png";
import cards from "../img/bank-cards.png";
import jcb from "../img/jcb.png";
import pay from "../img/u-pay.png";
import net from "../img/netwer.png";
import skrill from "../img/skril.png";
import sectionthree from "../img/secton-three.png";
import sectionfour from "../img/section-four.png";
import sectionfive from "../img/section-five.png";
import { Fade, Slide } from "react-awesome-reveal";

export const Section = () => {
  return (
    <section className="py-5">
      <div className="col-12 p-0">
      <Slide direction="down">
       
          <h1>Smooth Experience on Any Device </h1>

          <h5>
            Whether you prefer trading at your desk or on the go — Olymp Trade
            has got you covered.
          </h5>
          </Slide>
          

          <div className="row mx-0 justify-content-center my-5">
            <div className="col-md-5 col-lg-4 p-0">
              <img src={sectiontwo} alt="section-img" />

              <h5>
               
                Intuitive interface is easily understood even for novices.
              </h5>
            </div>

            <div className="col-md-5 col-lg-4 p-0">
               <h5 className="mb-5">
                The custom-built platform has been adapted for any device you
                may choose and switching is 100% seamless.
              </h5>

              <div className="card-light p-3">
                <h1> 41</h1>
                <h5>User-friendly interface with lots of useful tools.</h5>
              </div>
             </div>
          </div>
 
          <div className="apps row mx-0 justify-content-between align-items-center my-5">
            <div>
              <span> Desktop</span>

              <div className="row mx-0 my-3">
                <div className="card-dark wide">
                  <img src={meta} alt="meta" />
                  <div className="ml-3">
                    <small> Available On</small>
                    <h5>MetaTrader4</h5>
                  </div>
                </div>
                <div className="card-dark wide">
                  <img src={mac} alt="meta" />
                  <div className="ml-3">
                    <small> Download App for </small>
                    <h5>
                      macOS <small>66 Mb</small>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="m-auto">
              <span> Mobile</span>

              <div className="row mx-0 my-3">
                <div className="card-dark">
                  <img src={apple} alt="meta" />
                </div>
                <div className="card-dark">
                  <img src={store} alt="meta" />
                </div>
              </div>
            </div>

            <div className="m-auto">
              <span> App downloads</span>
              <h1>44M+</h1>
            </div>
          </div>
      </div>

      <div className="row mx-0">
        <div className="col-lg-5 p-0 my-4">
        <Slide direction="left" duration={1500}>
          <h1>A Platform that Works for You </h1>

          <h6>These features will help you reach your goals</h6>

          <button className="btn btn-blue-btn">Start Trading —it`s free</button>
          </Slide>
        </div>
        <div className="trades col-lg-7 row p-0 my-4">
        <Slide direction="left" className=" col-9  col-sm-5 col-md-5 p-0 ">
          <div className="card-light d-flex align-items-end mx-3 my-3 p-3">
            <h5> Risk-Free Trades</h5>
          </div>
          <div className="card-light d-flex align-items-end mx-3 my-3 p-3">
            <h5> Demo Account</h5>
          </div>
          <div className="card-light   d-flex align-items-end mx-3 my-3 p-3">
            <h5> Market</h5>
          </div>
          <div className="card-light   d-flex align-items-end mx-3 my-3 p-3">
            <h5> Personal Manager</h5>
          </div>

          </Slide>
        
        </div>
      </div>

      <Fade  duration={1500}>
      <div className="row mx-0 my-5">
        <div className="col-12 p-0">
          <h1>No limits. No commission. No delays. </h1>

          <h6>Quick and easy deposits and withdrawals</h6>
        </div>

        <div className="col-12 row mx-0 justify-content-between p-0">
          <div
            className="payment-cards col-6 col-sm-4 col-md-2 p-0 mx-2 my-2"
            style={{ backgroundColor: " #203146" }}
          >
            <img src={cards} alt="img-item" />
          </div>
          <div
            className="payment-cards col-6 col-sm-4 col-md-2 p-0 mx-2 my-2"
            style={{ backgroundColor: "#0063AE" }}
          >
            <img src={jcb} alt="img-item" />
          </div>
          <div
            className="payment-cards col-6 col-sm-4 col-md-2 p-0 mx-2 my-2"
            style={{ backgroundColor: "#005964" }}
          >
            <img src={pay} alt="img-item" />
          </div>
          <div
            className="payment-cards col-6 col-sm-4 col-md-2 p-0 mx-2 my-2"
            style={{ backgroundColor: "#2D5000" }}
          >
            <img src={net} alt="img-item" />
          </div>
          <div
            className="payment-cards col-6 col-sm-4 col-md-2 p-0 mx-2 my-2"
            style={{ backgroundColor: "#530039" }}
          >
            <img src={skrill} alt="img-item" />
          </div>
          <div
            className="payment-cards col-6 col-sm-4 col-md-2 p-0 mx-2 my-2"
            style={{ backgroundColor: "#1C2A3B" }}
          >
            <h5> 5+</h5>
          </div>
        </div>
      </div>
        
      </Fade>

    
      <Fade  duration={1500}>
      <div className="row justify-content-center mx-0 my-5">
        <div className="col-12 p-0">
          <h1>5 Years of Excellence </h1>

          <h6>
            An industry trailblazer since 2014, Olymp Trade has many
            achievements to be proud of:
          </h6>
        </div>

        <div className="col-12 p-0 large-grids">
          <div className="card p-0">
            <img src={sectionthree} alt="card-img" />
            <div className="text">
              <h5>Partnerships</h5>
              <h6>
                In 2019 one of the world's top rugby players, Ebene Etzbeth
                (South Africa), was a partner to Olymp Trade.
              </h6>
            </div>
          </div>
          <div className="card">
            <img src={sectionfour} alt="card-img" />
            <div className="text">
              <h5>Awards</h5>
              <h6>“Best Financial Broker“</h6>

              <h6> CPA Life Awards 2017</h6>
            </div>
          </div>

          <div className="card">
            <img src={sectionfive} alt="card-img" />
            <div className="text">
              <h5>Team</h5>
              <h6>
                Olymp Trade is proud to support the LCR Honda team at MotoGP™
                2020
              </h6>
            </div>
          </div>
        </div>

        <button className="btn btn-blue-btn my-5">
          Start Trading —it`s free
        </button>
      </div>
      </Fade>
    </section>
  );
};
