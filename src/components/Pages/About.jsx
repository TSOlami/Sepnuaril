import React from "react";

const About = () => {
  return (
    <>
      <section className="">
        <div className="about-hero relative">
          <h1 className="about-hero-content text-3xl text-white font-extrabold">
            OUR VISION
            <br />
            AND CORE VALUES
          </h1>
        </div>
        <div className="p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-secondary font-extrabold text-3xl lg:text-4xl p-2">
            DELIVERING IN EXCELLENCE IS ALL WE DO.
          </h2>
          <p className="p-4 text-md font-medium">
            Since its humble beginning in 1937, Sepnuaril Oil & gas ltd. has
            grown as a family of hard-working individuals into a world-class
            workers Exploring new markets and partnerships, investing in
            diversity and our communities, and forging new opportunities, we are
            dedicated to serving our people, our neighbors, our partners and all
            those who aspire to build a better future within the oil and gas
            industry. Sepnuaril Oil & gas ltd is committed to continuing our
            legacy through the integrity of our team members. Through the years,
            these core values have represented our company as well as each
            individual that make our projects possible: Ownership, Integrity,,
            Diversity and Community. These values, paired with our ambitious
            vision and drive to succeed, are what define Hensel Phelps and will
            ensure our continued growth and excellence for generations to come.
          </p>
        </div>
      </section>

      <div>
        <div className="flex items-center justify-center mt-10 mx-4 md:mx-4">
          <div className="border-t-2 border-[var(--primary-color)] w-48 md:w-96"></div>
          <span className="px-6 md:px-14 text-secondary text-lg font-medium uppercase whitespace-nowrap">
            OUR CORE VALUES
          </span>
          <div className="border-t-2 border-[var(--primary-color)] w-48 md:w-96"></div>
        </div>

        <section className="flex flex-col pt-6 md:pt-12 md:flex-row md:space-y-0 md:items-center md:justify-center">
          <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900">
            Integrity & Accountability – We operate with honesty, transparency,
            and responsibility, ensuring trust and ethical business practices in
            all our operations.
          </div>
          <div className="flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem]"></div>
        </section>
        <section className="flex flex-col-reverse md:flex-row md:space-y-0 md:items-center md:justify-center">
          <div className="flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem]"></div>
          <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900">     
            Innovation & Excellence – We embrace cutting-edge technology and
            industry best practices to drive efficiency, sustainability, and
            superior performance.
          </div>
        </section>
        <section className="flex flex-col md:flex-row md:space-y-0 md:items-center md:justify-center">
          <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900">     
            Safety & Sustainability – Protecting people, communities, and the
            environment is at the heart of our operations, ensuring long-term
            energy solutions with minimal impact.
          </div>
          <div className="flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem]"></div>
        </section>
        <section className="flex flex-col-reverse md:flex-row md:space-y-0 md:items-center md:justify-center">
          <div className="flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem]"></div>
          <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900">     
            Innovation & Excellence – We embrace cutting-edge technology and
            industry best practices to drive efficiency, sustainability, and
            superior performance.
          </div>
        </section>
        <section className="flex flex-col md:flex-row md:space-y-0 md:items-center md:justify-center">
          <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900">     
            Safety & Sustainability – Protecting people, communities, and the
            environment is at the heart of our operations, ensuring long-term
            energy solutions with minimal impact.
          </div>
          <div className="flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem]"></div>
        </section>
      </div>
    </>
  );
};

export default About;
