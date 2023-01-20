import React from "react";
import "./Booking.css";

const Booking = () => {
  return (
    <div className="pb-10">
      <h2 className="text-center booking-title font-semibold pb-12">
        Start Online Psychologist Consultation With Three Easy Steps
      </h2>

      <div className="mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="py-8 bg-[#E7E6E4] rounded dark:bg-gray-800">
          <div className="bg-[#D9D9D9] radius m-auto flex justify-center items-center">
            1
          </div>
          <div className="text-center package">Choose A Package</div>
          <div className="booking-content text-center">
            Choose between two types of <br /> packages, Depending upon on{" "}
            <br /> your requirement and need.
          </div>
        </div>

        <div className="py-8 bg-[#E7E6E4] rounded dark:bg-gray-800">
          <div className="bg-[#D9D9D9] radius-2 m-auto flex justify-center items-center">
            2
          </div>
          <div className="text-center package">Connect With Your Therapist</div>
          <div className="booking-content text-center">
            Fill out our form and complete <br /> the payment process I Will{" "}
            <br /> shortly be in touch with you
          </div>
        </div>

        <div className="py-8 bg-[#E7E6E4] rounded dark:bg-gray-800">
          <div className="bg-[#D9D9D9] radius-3 m-auto flex justify-center items-center">
            3
          </div>
          <div className="text-center package">Begin Your Healing Journey</div>
          <div className="booking-content text-center">
            Start your session with Me, a <br /> step towards healing.
          </div>
        </div>
        
      </div>
      <button className="btn-booking flex m-auto">Book Session</button>
    </div>
  );
};

export default Booking;
