import React from "react";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <>
      <div className="hero shadow-xl">
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

      <div>
        <div className="flex items-center justify-center mt-10 mx-4 md:mx-4">
          <div className="border-t-2 border-[var(--primary-color)] w-48 md:w-96"></div>
          <span className="px-6 md:px-14 text-secondary text-lg font-medium uppercase whitespace-nowrap">
            Features
          </span>
          <div className="border-t-2 border-[var(--primary-color)] w-48 md:w-96"></div>
        </div>

        <div className="flex flex-col justify-between space-y-8 p-6 mx-auto md:space-y-0 md:py-12 md:space-x-6 md:flex-row md:items-center md:justify-center">
          <div className="container">
            <div className="card bg-[var(--primary-color)] text-tertiary w-72 md:w-48 lg:w-72 shadow-xl mx-auto">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="card bg-[var(--primary-color)] text-tertiary w-72 md:w-48 lg:w-72 shadow-xl mx-auto">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="card bg-[var(--primary-color)] text-tertiary w-72 md:w-48 lg:w-72 shadow-xl mx-auto">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <section className="responsive-hero relative dark:bg-gray-900">
          <div className="container relative z-10 flex flex-col-reverse lg:flex-row-reverse items-center justify-between p-2 md:p-6 mx-auto lg:py-16">
            {/* TEXT */}
            <div className="w-full lg:w-1/2 px-2 md:px-4">
              <div className="text-center lg:text-left bg-none lg:bg-[var(--secondary-color)] dark:bg-gray-900/70 p-4 rounded">
                <h1 className="text-3xl font-semibold tracking-wide text-[var(--tertiary-color)] dark:text-white lg:text-4xl pb-3">
                  About Us
                </h1>
                <p className="text-base text-[var(--tertiary-color)] dark:text-gray-300 text-justify">
                  At Sepnuaril, we are dedicated to powering industries with
                  reliable oil and gas solutions. With a strong commitment to
                  efficiency, innovation, and sustainability, we specialize in
                  exploration, production, refining, and energy distribution.
                  Our expertise spans across offshore and onshore operations,
                  ensuring the highest standards of safety and environmental
                  responsibility. Driven by technology and industry best
                  practices, we provide tailored solutions that meet the
                  evolving energy demands of businesses and communities. At
                  Sepnuaril, we don’t just supply energy—we fuel progress and
                  shape the future of the industry.
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="w-full h-0 lg:w-1/2 lg:h-auto relative md:static">
              <img
                className="object-cover w-full h-full lg:object-contain p-2 lg:p-0"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Freemann Firms"
              />
            </div>
          </div>
        </section>
      </div>

      <div>
        <div className="flex items-center justify-center mt-10 mx-4 md:mx-4">
          <div className="border-t-2 border-[var(--primary-color)] w-48 md:w-96"></div>
          <span className="px-6 md:px-14 text-secondary text-lg font-medium uppercase whitespace-nowrap">
            Our Services
          </span>
          <div className="border-t-2 border-[var(--primary-color)] w-48 md:w-96"></div>
        </div>

        <div className="grid grid-cols-1 justify-between space-y-8 p-6 mx-auto md:space-y-0 md:py-12 md:space-x-6 md:grid-cols-3 md:items-center md:justify-center">
          <div className="container mb-6">
            <div className="card bg-[var(--primary-color)] text-tertiary w-72 md:w-48 lg:w-72 shadow-xl mx-auto">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
          <div className="container mb-6">
            <div className="card bg-[var(--primary-color)] text-tertiary w-72 md:w-48 lg:w-72 shadow-xl mx-auto">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
          <div className="container mb-6">
            <div className="card bg-[var(--primary-color)] text-tertiary w-72 md:w-48 lg:w-72 shadow-xl mx-auto">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
          <div className="container mb-6">
            <div className="card bg-[var(--primary-color)] text-tertiary w-72 md:w-48 lg:w-72 shadow-xl mx-auto">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
          <div className="container mb-6">
            <div className="card bg-[var(--primary-color)] text-tertiary w-72 md:w-48 lg:w-72 shadow-xl mx-auto">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
          <div className="container mb-6">
            <div className="card bg-[var(--primary-color)] text-tertiary w-72 md:w-48 lg:w-72 shadow-xl mx-auto">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
