import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import "./Review.css";
import img from "../../assets/Ellipse 1 (1).png";
import star from "../../assets/start.png";

const Review = () => {
  return (
    <div className="pb-14">
      <h2 className="text-center customer-title">Customer Reviews</h2>
      {/* <div className="review">
        <div className="mx-10 py-6 flex">
          <div>
            <img src={img} className="avatar" alt="" />
          </div>
          <div className=" ml-8">
            <div>
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
            </div>
            <p className="font-bold text-xm">5/5</p>
            <p className="customer-content">
              At first, I had my doubts about online counselling, but I gave it
              a shot and was pleasantly surprised to learn how much it can
              actually aid you. Dr. Sayesta created a wonderfully peaceful,
              healing environment where I felt free to share details with her
              that I would normally feel embarrassed to do so. She offers
              much-appreciated compassion instead of any judgement, followed by
              advice. She can pinpoint the source of my problems and the
              exercises I can do to solve them. I occasionally feel depressed
              again, but he constantly inspires me to get back on the right
              track. A truly helpful person is someone who won't judge you.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="hero bg-base-200 customer lg:p-12">
        <div className="hero-content flex-col lg:flex-row">
          <img alt="" src={img} className="max-w-sm rounded-full shadow-2xl" />
          <div className="mx-6">
            <div>
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
            </div>
            <p className="font-bold text-xm">5/5</p>
            <p className="customer-content">
              At first, I had my doubts about online counselling, but I gave it
              a shot and was pleasantly surprised to learn how much it can
              actually aid you. Dr. Sayesta created a wonderfully peaceful,
              healing environment where I felt free to share details with her
              that I would normally feel embarrassed to do so. She offers
              much-appreciated compassion instead of any judgement, followed by
              advice. She can pinpoint the source of my problems and the
              exercises I can do to solve them. I occasionally feel depressed
              again, but he constantly inspires me to get back on the right
              track. A truly helpful person is someone who won't judge you.
            </p>
          </div>
        </div>
      </div> */}

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="hero bg-[#E7E6E4] customer lg:p-12">
            <div className="hero-content flex-col lg:flex-row">
              <img
                alt=""
                src={img}
                className="max-w-sm rounded-full shadow-2xl"
              />
              <div className="mx-6">
                <div>
                  <img
                    src={star}
                    className="mr-1 inline-block h-4 w-4"
                    alt=""
                  />
                  <img
                    src={star}
                    className="mr-1 inline-block h-4 w-4"
                    alt=""
                  />
                  <img
                    src={star}
                    className="mr-1 inline-block h-4 w-4"
                    alt=""
                  />
                  <img
                    src={star}
                    className="mr-1 inline-block h-4 w-4"
                    alt=""
                  />
                  <img
                    src={star}
                    className="mr-1 inline-block h-4 w-4"
                    alt=""
                  />
                </div>
                <p className="font-bold text-xm">5/5</p>
                <p className="customer-content">
                  At first, I had my doubts about online counselling, but I gave
                  it a shot and was pleasantly surprised to learn how much it
                  can actually aid you. Dr. Sayesta created a wonderfully
                  peaceful, healing environment where I felt free to share
                  details with her that I would normally feel embarrassed to do
                  so. She offers much-appreciated compassion instead of any
                  judgement, followed by advice. She can pinpoint the source of
                  my problems and the exercises I can do to solve them. I
                  occasionally feel depressed again, but he constantly inspires
                  me to get back on the right track. A truly helpful person is
                  someone who won't judge you.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div className="hero bg-base-200 customer lg:p-12">
        <div className="hero-content flex-col lg:flex-row">
          <img alt="" src={img} className="max-w-sm rounded-full shadow-2xl" />
          <div className="mx-6">
            <div>
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
            </div>
            <p className="font-bold text-xm">4/5</p>
            <p className="customer-content">
              At first, I had my doubts about online counselling, but I gave it
              a shot and was pleasantly surprised to learn how much it can
              actually aid you. Dr. Sayesta created a wonderfully peaceful,
              healing environment where I felt free to share details with her
              that I would normally feel embarrassed to do so. She offers
              much-appreciated compassion instead of any judgement, followed by
              advice. She can pinpoint the source of my problems and the
              exercises I can do to solve them. I occasionally feel depressed
              again, but he constantly inspires me to get back on the right
              track. A truly helpful person is someone who won't judge you.
            </p>
          </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div className="hero bg-base-200 customer lg:p-12">
        <div className="hero-content flex-col lg:flex-row">
          <img alt="" src={img} className="max-w-sm rounded-full shadow-2xl" />
          <div className="mx-6">
            <div>
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
              <img src={star} className="mr-1 inline-block h-4 w-4" alt="" />
            </div>
            <p className="font-bold text-xm">3/5</p>
            <p className="customer-content">
              At first, I had my doubts about online counselling, but I gave it
              a shot and was pleasantly surprised to learn how much it can
              actually aid you. Dr. Sayesta created a wonderfully peaceful,
              healing environment where I felt free to share details with her
              that I would normally feel embarrassed to do so. She offers
              much-appreciated compassion instead of any judgement, followed by
              advice. She can pinpoint the source of my problems and the
              exercises I can do to solve them. I occasionally feel depressed
              again, but he constantly inspires me to get back on the right
              track. A truly helpful person is someone who won't judge you.
            </p>
          </div>
        </div>
      </div></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
