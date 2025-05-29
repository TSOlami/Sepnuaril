import React from "react";

//IMAGES
import about from "../../assets/Images/about.jpg";

const Homepage = () => {
  return (
    <>
      <div className="hero homepagehero shadow-xl">
        <div className="hero-image w-full bg-[var(--secondary-color)] bg-center bg-cover h-[38rem]">
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white lg:text-4xl p-3 lg:p-6">
                POWERING THE FUTURE WITH RELIABLE ENERGY SOLUTIONS
              </h1>
              <p className="text-2xl text-white p-2 mb-4 font-medium">
                Welcome to SEPNUARIL - Powering progress!
              </p>
              <p className="text-xl text-white m-6 font-normal">
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
            FEATURES
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
              <div className="text-center lg:text-left bg-none lg:bg-[var(--secondary-color)] p-4 rounded">
                <h1 className="text-3xl font-semibold tracking-wide text-[var(--tertiary-color)] lg:text-4xl pb-3">
                  ABOUT US
                </h1>
                <p className="text-base text-[var(--tertiary-color)] dark:text-gray-100 text-justify">
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
            <div className="w-full h-0 lg:w-1/2 lg:h-auto relative md:static shadow-xl">
              <img
                className="object-cover w-full h-full lg:object-contain p-2 lg:p-0"
                src={about}
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
        </div>
      </div>

      <div>
        <section className="">
          <div className="w-full relative shadow-xl">
            <div className="flex items-center justify-center mt-10 mx-4 md:mx-4">
              <div className="border-t-2 border-[var(--primary-color)] w-48 md:w-96"></div>
              <span className="px-6 md:px-14 text-secondary text-lg font-medium uppercase whitespace-nowrap">
                CONTACT
              </span>
              <div className="border-t-2 border-[var(--primary-color)] w-48 md:w-96"></div>
            </div>

            <section className="flex flex-col pt-6 md:pt-12 md:flex-row md:space-y-0 md:items-center md:justify-center">
              <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900">
                GENERAL ENQUIRY
                <br />
                <br />
                info@sepnuaril.com
              </div>
              <div className="flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem]"></div>
            </section>
            <section className="flex flex-col-reverse md:flex-row md:space-y-0 md:items-center md:justify-center">
              <div className="flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem]"></div>
              <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900" >
                COOPERATE OFFICE  - HQ
                <br />
                <br />
                Address..................................................................
                <br />
                Number........................................................................
              </div>
            </section>
            <section className="flex flex-col md:flex-row md:space-y-0 md:items-center md:justify-center">
              <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900">
                BRANCH OFFICE
                <br />
                <br />
                Address..................................................................
                <br />
                Number.........................................................................
              </div>
              <div className="flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem]"></div>
            </section>
            {/* <section class="bg-white dark:bg-gray-900">
                <div class="py-8 lg:py-12 px-4 mx-auto">
                  <h2 class="mb-2 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Contact Us
                  </h2>
                  <form action="#" class="space-y-6">
                    <div>
                      <label
                        for="Name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your Full Name
                      </label>
                      <input
                        type="name"
                        id="name"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Full name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="subject"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Let us know how we can help you"
                        required
                      />
                    </div>
                    <div class="sm:col-span-2">
                      <label
                        for="message"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Your message
                      </label>
                      <textarea
                        id="message"
                        rows="6"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Leave a comment..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      class="py-3 px-5 text-sm font-medium text-center text-secondary border rounded-md bg-[var(--tertiary-color)] sm:w-fit hover:bg-[var(--primary-color)] hover:text-tertiary focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Send message
                    </button>
                  </form>
                </div>
              </section> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
