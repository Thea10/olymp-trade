import React from "react";
import { Fade } from "react-awesome-reveal";
import logo from "../img/logo.png";

export const Footer = () => {
  return (
    <Fade>
         <footer>
      <div className="pt-md-5  ">
        <div className="sub-links row mx-0 p-3 p-md-5 mt-4 justify-content-between">
          <div className="col-12  p-0 col-md-6 row mx-0 justify-content-between mb-5 ">
            <ul>
              <li className="link-heads mb-4"> Olymp Trade </li>
              <li className="link-texts mb-3">About us </li>
              <li className="link-texts  mb-3">Affiliate program </li>
            </ul>

            <ul>
              <li className="link-heads mb-4"> Help </li>
              <li className="link-texts mb-3">Education </li>
              <li className="link-texts  mb-3">FAQ </li>
              <li className="link-texts  mb-3">Support </li>
            </ul>
            <ul>
              <li className="link-heads mb-4"> Analytics </li>
              <li className="link-texts mb-3">Assets </li>
              <li className="link-texts  mb-3">Insights </li>
              <li className="link-texts  mb-3">Blog </li>
            </ul>
          </div>

          <div className=" col-12 justify-content-center d-flex  p-0  col-md-5 mb-5">
            <div className="card bg-red mx-2">
              <i className="fa fa-youtube-play mb-5" aria-hidden="true"></i>

              <span>220K</span>
              <span>YouTube</span>
            </div>

            <div className="card bg-blue mx-2">
              <i className="fas fa-facebook-square mb-5"></i>

              <span>1M</span>
              <span>Facebook</span>
            </div>
          </div>
        </div>

        <div className="sub-links row mx-0 p-3 p-md-5 mt-4 justify-content-between">
          <div className="col-12   col-md-4 mb-5 ">
            <img src={logo} className="mb-5" alt="logo" />


            <div> © 2014 —  {new Date().getFullYear()}  OlympTrade </div>
          </div>

          <div className="col-12 col-md-8 mb-5"> 
           <span> The Transactions offered by this Website can be executed only by fully competent adults. Transactions with financial instruments offered on the Website involve substantial risk and trading may be very risky. If you make Transactions with the financial instruments offered on this Website, you might incur substantial losses or even lose everything in your Account. Before you decide to start Transactions with the financial instruments offered on the Website, you must review the Service Agreement and Risk Disclosure Information.</span>

           <span>The services on the Website are provided and regulated by Saledo Global LLC, registered at: First Floor, First St. Vincent Bank Ltd Building, P.O. Box 1574, James Street, Kingstown, St. Vincent & the Grenadines, which is fully licensed to perform its activities by the laws of that country. Partner companies: VISEPOINT LIMITED; registration No. C 94716, registered at: ACT - BARON COURT, KARLU GALEA STREET, City/Locality VICTORIA (GOZO) VCT 2604, Country MALTA and WALLFORT LIMITED, registration number HE 364395, registered at: Agias Zonis & Thessalonikis, NICOLAU PENTADROMOS CENTER, 5th floor, flat/office 305B, 3026 Limassol, Cyprus, provide content and perform operational management of the business.</span>
          </div>
        </div>

        <div className="bottom-footer p-3 p-md-4 row mx-0 justify-content-between"> 
        <span> Regulation</span>

        <span className="m-auto"> Legal information</span>
         
        </div>
      </div>
    </footer>

    </Fade>
 
  );
};

export default Footer;
