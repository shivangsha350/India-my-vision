import React from "react";

const Objectives = () => {
  return (
    <section className="bg-[#FAFAF8] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h3 className="uppercase text-sm text-gray-500 tracking-wider mb-2">
          Objectives
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-lime-900 mb-4">
          Instill a Sense of Nationalism and Responsibility
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          This program seeks to achieve the following: Encourage awareness of
          national challenges and possible solutions. Inspire values for a
          strong, happy, and prosperous India.
        </p>
      </div>

      {/* 3-column row */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-sm grid md:grid-cols-3 border overflow-hidden">
        {/* 01 */}
        <div className="p-10 border-r border-gray-200">
          <h4 className="text-5xl font-extrabold text-gray-300 mb-4">01.</h4>
          <h3 className="text-2xl font-bold text-lime-900 mb-3">Causes</h3>
          <p className="text-gray-600 mb-6">
            We support education, healthcare, and poverty reduction.
          </p>
          <a
            href="#"
            className="text-black font-semibold hover:underline inline-flex items-center"
          >
            See Proof <span className="ml-2">→</span>
          </a>
        </div>

        {/* 02 */}
        <div className="p-10 border-r border-gray-200">
          <h4 className="text-5xl font-extrabold text-gray-300 mb-4">02.</h4>
          <h3 className="text-2xl font-bold text-lime-900 mb-3">Get Involved</h3>
          <p className="text-gray-600 mb-6">
            Volunteer or donate your skills to make a difference.
          </p>
          <a
            href="#"
            className="text-black font-semibold hover:underline inline-flex items-center"
          >
            View Financials <span className="ml-2">→</span>
          </a>
        </div>

        {/* 03 */}
        <div className="p-10">
          <h4 className="text-5xl font-extrabold text-gray-300 mb-4">03.</h4>
          <h3 className="text-2xl font-bold text-lime-900 mb-3">Donation</h3>
          <p className="text-gray-600 mb-6">
            Contribute today and help us change lives and build a better future.
          </p>
          <a
            href="#"
            className="text-black font-semibold hover:underline inline-flex items-center"
          >
            Learn More <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
