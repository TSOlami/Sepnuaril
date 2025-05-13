import React from "react";

const Services = () => {
  return (
    <>
      <section className="">
        <div className="service-hero relative">
          <h1 className="service-hero-content text-3xl text-white font-extrabold">
            OUR SERVICES
          </h1>
        </div>
        <div className="p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-secondary font-extrabold text-3xl lg:text-4xl p-2">
            PLAN, <span className="text-primary">BUILD,</span> MANAGE
          </h2>
          <p className="p-4 text-md font-medium">
            At Sepnuaril, we explore, develop, and deliver world-class energy
            solutions that fuel industries and drive economic growth. Every
            successful energy venture begins with a vision. At Sepnuaril, we
            turn that vision into reality through cutting-edge exploration,
            advanced production, and strategic distribution. From upstream
            operations to refining and infrastructure development, we take a
            comprehensive approach that ensures efficiency, sustainability, and
            long-term reliability. Backed by innovation and industry expertise,
            we are committed to powering the future with safe, responsible, and
            high-performing energy solutions.
          </p>
        </div>
      </section>

      <div>
        <div className="flex items-center justify-center mt-10 mx-4 md:mx-4">
          <div className="border-t-2 border-[var(--primary-color)] w-48 md:w-96"></div>
          <span className="px-6 md:px-14 text-secondary text-lg font-medium uppercase whitespace-nowrap">
            OUR SERVICES
          </span>
          <div className="border-t-2 border-[var(--primary-color)] w-48 md:w-96"></div>
        </div>

        <section className="flex flex-col pt-6 md:pt-12 md:flex-row md:space-y-0 md:items-center md:justify-center">
          <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem]">
            Plan (Exploration & Production) : We harness cutting-edge technology
            and in-depth geological analysis to identify, evaluate, and unlock
            high-potential oil and gas reserves. Our strategic exploration and
            precision drilling techniques maximize resource recovery while
            ensuring environmental responsibility.
          </div>
          <div className="flex md:flex-1 p-6 bg-base-300 shadow-md h-[14rem]"></div>
        </section>
        <section className="flex flex-col-reverse md:flex-row md:space-y-0 md:items-center md:justify-center">
          <div className="flex md:flex-1 p-6 bg-base-300 shadow-md h-[14rem]"></div>
          <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem]">
            Build (Refining & Processing) : Sepnuaril develops world-class
            refining and processing facilities designed for efficiency,
            sustainability, and high-yield production. Our state-of-the-art
            plants transform crude oil and natural gas into premium fuels,
            petrochemicals, and other essential energy products.`
          </div>
        </section>
        <section className="flex flex-col md:flex-row md:space-y-0 md:items-center md:justify-center">
          <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem]">
            Maintain (Energy Trading & Distribution) : With a seamless supply
            chain and global market access, we ensure the uninterrupted flow of
            energy resources. Our advanced logistics, storage networks, and
            strategic partnerships guarantee timely and efficient delivery of
            crude oil, natural gas, and refined products worldwide.
          </div>
          <div className="flex md:flex-1 p-6 bg-base-300 shadow-md h-[14rem]"></div>
        </section>
      </div>
    </>
  );
};

export default Services;
