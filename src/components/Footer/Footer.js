import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#E7E6E4]">
      <footer className="container m-auto footer p-10 bg-[#E7E6E4] text-base-content">
        <div>
          <p className="title">Sayesta Goswami, PhD</p>
          <p className="text-xs text-center sub-title ml-9">
            <small>CLINICAL PSYCHOLOGIST</small>
          </p>


            <div className="flex items-center justify-center mt-10 contact">
              <FaMapMarkerAlt className="mr-6"></FaMapMarkerAlt>
              <span>
                Anchal Tower, Sixmile, <br /> Guwahati, Assam 781022, India
              </span>
            </div>

            <div className="flex items-center justify-center contact">
              <FaPhoneAlt className="mr-6"></FaPhoneAlt>
              <span>+918333552221</span>
          </div>


          <div className="flex items-center justify-center contact">
              <FaWarehouse className="mr-6"></FaWarehouse>
              <span>sayestagoswami.pt@gmail.com</span>
          </div>


        </div>
        <div>
          <span className="footer-quick">Quick Links</span>
          <a className="quick-content">Book Session</a>
          <a className="quick-content">About Me</a>
          <a className="quick-content">Contact Us</a>
        </div>
        <div>
          <span className="footer-Legal">Legal Stuff</span>
          <a className="legal-content">Disclaimer</a>
          <a className="legal-content">Privacy Policy</a>
          <a className="legal-content">Terms of Services</a>
        </div>
      </footer>
      <p className="text-center reserved">All rights reserved</p>
    </div>
  );
};

export default Footer;
