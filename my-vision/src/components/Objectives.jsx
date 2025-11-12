import React from "react";

const Objectives = () => {
  return (
    <section className="bg-[#FAFAF8] py-20 px-6 md:px-16">
      {/* Heading Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-lime-900 mb-4">
          Objectives
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Our objectives aim to empower youth with values, vision, and responsibility to contribute meaningfully to the nation’s growth.
        </p>
      </div>

      {/* 4 Objective Points */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border divide-y divide-gray-200 overflow-hidden">
        {/* Point 01 */}
        <div className="p-8 text-left">
          <h4 className="text-3xl font-bold text-lime-900 mb-2">01. Patriotism & Social Awareness</h4>
          <p className="text-gray-600 mb-2">
            To instill a sense of nationalism and social responsibility among students.
          </p>
        </div>

        {/* Point 02 */}
        <div className="p-8 text-left">
          <h4 className="text-3xl font-bold text-lime-900 mb-2">02. Visionary Mindset</h4>
          <p className="text-gray-600 mb-2">
            To nurture goal-setting and futuristic thinking in youth.
          </p>
        </div>

        {/* Point 03 */}
        <div className="p-8 text-left">
          <h4 className="text-3xl font-bold text-lime-900 mb-2">03. Problem-Solving Approach</h4>
          <p className="text-gray-600 mb-2">
            To foster an understanding of current national challenges and the ability to ideate practical solutions.
          </p>
        </div>

        {/* Point 04 */}
        <div className="p-8 text-left">
          <h4 className="text-3xl font-bold text-lime-900 mb-2">04. Core Indian Values</h4>
          <p className="text-gray-600 mb-2">
            To promote core values that support a strong, happy, and prosperous India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
