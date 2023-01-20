import React from "react";
import img from "../../../assets/banner.png";
import img1 from "../../../assets/image1.png";
import './Banner.css'
const Banner = () => {
  return (
    <div>
      <div className="bg">
        <div className="pt-14">
          <div className="hero bg-[#E7E6E4]">
            <div className="hero-content flex-col lg:flex-row-reverse p-0 gap-0 max-w-full">
              <img alt="" src={img} className="pl-auto h-[400px] w-[100%] flex justify-end" />
              <div className="my-6 mx-6">
                <img src={img1} alt="" />
                <p className="text-center left-content">From the comfort of your own space</p>
                <p className="text-center mt-4 mb-14 left-small"><small>Individual therapy for adults</small></p>
                <button className="btn-button flex m-auto">Book Session</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
