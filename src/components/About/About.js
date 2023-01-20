import React from "react";
import "./About.css";
import img from "../../assets/doctor.png";
const About = () => {
  return (
    <div className="bg pb-32">
      <h2 className="text-center pt-12 about pb-16">About Me</h2>

      <div className="hero bg">
        <div className="hero-content1 flex-col lg:flex-row">
          <div>
            <img alt="" src={img} className="rounded-lg h-[26rem] w-96" />
            <button className="btn-doctor flex m-auto doctor">Contact Dr. Goswami</button>
          </div>
          <div>
            <p className="about-content">
              Hello, I have completed an undergraduate degree in psychology at{" "}
              <br />
              Delhi University, subsequently pursued graduate training in <br />
              counseling psychology at the AIIMS Delhi, and completed a <br />
              doctorate in clinical psychology at the Adler School of <br />
              Professional Psychology. I have clinical interests and worked with{" "}
              <br />
              children, teens, adults, diagnostic assessment and addictions. I{" "}
              <br />
              use a broad range of cognitive behavioral and insight oriented{" "}
              <br />
              techniques in the psychotherapy and counseling process. <br />
            </p>
            <p className="mt-8 about-content">
              I have also taught a broad variety of graduate psychology and{" "}
              <br />
              counseling courses at the Delhi University and Jamia Milia
              Islamia. <br /> I have lectured and presented training seminars
              and workshops <br /> nationally and internationally in Europe and
              East Asia. My <br /> research and publication interests have
              included addictions, <br /> psychometrics, clinical training and
              supervision, and the <br /> integration of spiritual values in
              psychotherapy and supervision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
