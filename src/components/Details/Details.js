import React from "react";
import "./Details.css";
const Details = () => {
  return (
    <div>
      <div className="pt-16 mx-6">
        <h2 className="text-center detail-title">
          “The first step is always the most difficult part of a journey.”
        </h2>
        <p className="text-center details-begin font-semibold">
          Begining therapy, like starting most things in life can be scary
        </p>
        <div className="lg:mx-28 details-content">
          <p className="mt-6 text-center mx-6">
            I'm committed to assisting you in discovering your best self by offering a therapeutic setting that is safe,<br /> encouraging, and
            empathetic of your cultural background.
          </p>
          <p className="mt-6 text-center mx-6">
            Through therapy, I can support you in addressing both recent and
            enduring issues, fostering healthier relationships,<br /> managing
            work-life balance, reducing anxiety and depressive symptoms, and
            improving your resilience and capacity <br />
            for change.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Details;
