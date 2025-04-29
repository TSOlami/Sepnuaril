import React from "react";
import Button from "../Reusable/Button";

const Homepage = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-image w-full bg-[var(--secondary-color)] bg-center bg-cover h-[38rem]">
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-4xl font-semibold text-white lg:text-4xl p-3">
                Powering the future with Reliable Energy Solutions
              </h1>
              <p className="text-2xl text-white p-2 mb-4">
                Welcome to SEPNUARIL - Powering progress!
              </p>
              <p className="text-xl text-white m-6">
                We are committed to delivering oil and gas solutions that drive
                industries forward. With a focus on efficiency, innovation and
                sustainability, we are your trusted partner in energy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
