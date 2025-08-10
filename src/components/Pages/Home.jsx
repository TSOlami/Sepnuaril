import React from "react";

//IMAGES
import about from "../../assets/Images/about.jpg";
import features1 from "../../assets/Images/features1.jpg";
import features2 from "../../assets/Images/features2.jpg";
import features3 from "../../assets/Images/features3.jpg";
import Services1 from "../../assets/Images/services1.jpg";
import Services2 from "../../assets/Images/services2.jpg";
import Services3 from "../../assets/Images/services3.jpg";

const features = [
  {
    id: 1,
    title: "Card Title 1",
    description:
      "A card component has a figure, a body part, and inside body there are title and actions parts.",
    image: features1,
  },
  {
    id: 2,
    title: "Card Title 2",
    description:
      "A card component has a figure, a body part, and inside body there are title and actions parts.",
    image: features2,
  },
  {
    id: 3,
    title: "Card Title 3",
    description:
      "A card component has a figure, a body part, and inside body there are title and actions parts.",
    image: features3,
  },
];

const services = [
  {
    id: 1,
    title: "Oil & Gas Consulting",
    description:
      "Expert advisory for upstream, midstream, and downstream operations tailored to your business.",
    image: Services1,
  },
  {
    id: 2,
    title: "Engineering Solutions",
    description:
      "Comprehensive engineering support from design to implementation with industry-best practices.",
    image: Services2,
  },
  {
    id: 3,
    title: "Asset Management",
    description:
      "Maximize value and efficiency with strategic asset oversight and lifecycle planning.",
    image: Services3,
  },
];

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

        <div className="flex flex-col justify-between space-y-8 p-6 mx-auto md:space-y-0 md:py-12 md:space-x-6 md:flex-row md:items-start md:justify-center">
          {features.map(({ id, title, description, image }) => (
            <div className="container" key={id}>
              <div className="card bg-[var(--primary-color)] text-tertiary w-72 h-48 shadow-xl mx-auto flex flex-col">
                <figure className="w-full h-auto overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            </div>
          ))}
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

        <div className="grid grid-cols-1 gap-8 p-6 mx-auto md:grid-cols-3 md:py-12 md:items-center md:justify-center">
          {services.map(({ id, title, image }) => (
            <div className="container mb-6" key={id}>
              <div className="card bg-[var(--primary-color)] text-tertiary w-72 h-48 shadow-xl mx-auto flex flex-col">
                <figure className="w-full h-auto overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <section className="">
          <div className="w-full relative shadow-xl">
            <div className="flex items-center justify-center mt-10 mx-4 md:mx-4">
              <div className="border-t-2 border-[var(--primary-color)] w-48 md:w-96"></div>
              <span className="px-6 md:px-14 text-secondary text-lg font-medium uppercase whitespace-nowrap">
                CONTACT US
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
