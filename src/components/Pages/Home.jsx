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
              <h1 className="text-3xl font-extrabold text-white lg:text-4xl p-3 lg:p-6">
                Welcome to Sepnuaril Oil and Gas Services
              </h1>
              {/* <p className="text-2xl text-white p-2 mb-4 font-medium">
                Welcome to SEPNUARIL - Powering progress!
              </p> */}
              <p className="text-2xl text-white m-6 font-normal">
                At Sepnuaril, we are commited to delivering top-tier oilfield
                services with integrity, precision, and professionalism.
                SEPNUARIL stands as a beacon of quality and reliability in the
                oil and gas sector.
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
                  SEPNUARIL Oil and Gas Services is a newly established oilfield
                  servicing company founded by Olajide Adewusi, a seasoned
                  Nigerian-American oilfield expert based in West Texas. With
                  over a decade of hands-on technical and engineering experience
                  in the oil and gas industry, Mr. Adewusi brings a wealth of
                  knowledge and professionalism to the field. At SEPNUARIL, we
                  are committed to delivering high-quality rig site services
                  that reflect our integrity, technical excellence, and
                  dedication to safety. We take pride in the expertise and
                  professionalism of our trained, qualified, and experienced
                  team, who ensure every project is executed with precision and
                  efficiency. Strategically located in Midland, Texas, we
                  proudly serve clients across the Permian Basin, New Mexico,
                  and the broader United States, offering reliable oilfield
                  support services both onshore and offshore.
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
                FOR INQUIRIES
                <br />
                <br />
                info@sepnuarilservices.com
              </div>
              <div className="flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem]"></div>
            </section>
            <section className="flex flex-col-reverse md:flex-row md:space-y-0 md:items-center md:justify-center">
              <div className="flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem]"></div>
              <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900">
                FOR SERVICE RELATED SUPPORT
                <br />
                <br />
                support@sepnuarilservices.com
              </div>
            </section>
            <section className="flex flex-col md:flex-row md:space-y-0 md:items-center md:justify-center">
              <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900">
                OFFICE ADDRESS
                <br />
                <br />
                Sepnuaril Oil and Gas Services 7506 Midland, Texas, 79708, USA
              </div>
              <div className="flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem]"></div>
            </section>
            <section className="flex flex-col-reverse md:flex-row md:space-y-0 md:items-center md:justify-center">
              <div className="md:flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem] hidden"></div>
              <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900">
                PHONE NUMBER
                <br />
                <br />
                Phone
                1..............................................................
                <br />
                Phone
                2.......................................................................
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
