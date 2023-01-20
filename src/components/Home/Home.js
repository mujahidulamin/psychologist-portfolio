import React from "react";
import Booking from "../Booking/Booking";
import Details from "../Details/Details";
import Review from "../Review/Review";
import Banner from "./Banner/Banner";


import "./Home.css";
const Home = () => {
  return (
    <div className="bg">
        <Banner></Banner>
        <Details></Details>
        <Review></Review>
        <Booking></Booking>
    </div>
  );
};

export default Home;
