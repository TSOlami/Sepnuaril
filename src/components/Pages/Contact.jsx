import React from "react";

const Contact = () => {
  return (
    <>
      <section className="">
        <div className="contact-hero relative">
          <h1 className="contact-hero-content text-3xl text-white font-extrabold">
            CONTACT US
          </h1>
        </div>
      </section>

      <div>
        <div className="flex items-center justify-center mt-10 mx-4 md:mx-4">
          <div className="border-t-2 border-[var(--primary-color)] w-48 md:w-96"></div>
          <span className="px-6 md:px-14 text-secondary text-lg font-medium uppercase whitespace-nowrap">
            CONTACT
          </span>
          <div className="border-t-2 border-[var(--primary-color)] w-48 md:w-96"></div>
        </div>

        <section className="flex flex-col pt-6 md:pt-12 md:flex-row md:space-y-0 md:items-center md:justify-center">
            <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900">
            <br />
            <br />
            info@sepnuaril.com
          </div>
          <div className="flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem]"></div>
        </section>
        <section className="flex flex-col-reverse md:flex-row md:space-y-0 md:items-center md:justify-center">
          <div className="flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem]"></div>
          <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900">
            COOPERATE OFFICEHQ
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

        {/* <section className="dark:bg-gray-900">
          <div className="flex flex-col lg:flex-row items-center justify-between p-2 md:p-6 mx-auto lg:py-16">
            <div className="w-full px-2 md:px-4">
              <div className="text-center shadow-lg lg:text-left bg-[var(--primary-color)] dark:bg-gray-900/70 p-4 rounded">
                <h1 className="text-md font-semibold tracking-wide text-[var(--tertiary-color)] dark:text-white lg:text-2xl pb-3">
                  Interested in a career?
                </h1>
                <p className="text-sm text-[var(--tertiary-color)] dark:text-gray-300 text-justify p-4">
                  At Sepnuaril, we believe that our people are our greatest
                  asset. We're always on the lookout for talented, passionate,
                  and forward-thinking individuals to join our growing team.
                  Explore our current career opportunities to find a role that
                  matches your skills and ambitions. From engineering and
                  operations to business development and support functions, we
                  offer diverse paths to help you grow professionally. Submit
                  your application and upload your resume through our official
                  job portal.
                  <span className="text-red-500 text-sm font-bold">
                    📌 Please note: Applications must be submitted via the
                    official portal to be considered for employment.
                  </span>
                </p>
                <p className="text-sm text-[var(--tertiary-color)] dark:text-gray-300 text-justify p-4">
                  Need Help During the Application Process? We understand that
                  applying for a new job can be a big step. If you have
                  questions:
                </p>
                <ul className="dark:text-gray-300 space-y-4 text-tertiary text-sm">
                  <li>
                    ✅ <strong>Schedule a one-on-one call</strong> with our
                    recruitment team — we’ll reach out at your preferred time to
                    guide you through the process.
                  </li>
                  <li>
                    🔍 <strong>Learn more</strong> about what it's like to work
                    at Sepnuaril, our values, and the impact you can make in the
                    energy sector.
                  </li>
                  <li className="border-l-4 border-yellow-400 pl-4">
                    ⚠️{" "}
                    <strong className="text-yellow-600 dark:text-yellow-400">
                      Beware of fraudulent offers.
                    </strong>
                    <br />
                    Sepnuaril does not request payment for job applications or
                    training. All communication regarding recruitment will come
                    from verified company sources.
                  </li>
                </ul>
                <h1 className="text-md font-semibold tracking-wide text-[var(--tertiary-color)] dark:text-white lg:text-xl pb-2 pt-4">
                  Trade Partner or Vendor?{" "}
                </h1>
                <p className="text-sm text-[var(--tertiary-color)] dark:text-gray-300 text-justify pb-4">
                  Let’s Work Together We’re committed to building strong,
                  transparent, and mutually beneficial relationships with trade
                  partners. If you're a contractor, supplier, or service
                  provider looking to work with Sepnuaril, please complete our
                  Trade Partner Prequalification process. This ensures
                  compliance, alignment with our values, and a shared commitment
                  to safety and excellence. Other Questions or Requests? For all
                  other inquiries, including collaborations, support, or general
                  information: 📄 Please complete the contact form, and a member
                  of our team will get back to you promptly.
                </p>
              </div>
            </div>

            <div className="w-full relative shadow-xl">
              <section class="bg-white dark:bg-gray-900">
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
              </section>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Contact;
