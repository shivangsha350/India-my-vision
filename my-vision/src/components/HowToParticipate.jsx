import React from "react";

const HowToParticipate = () => {
  return (
    <section className="py-20 bg-white" id="how-to-participate">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-4xl md:text-4xl font-bold text-center text-red-900 mb-14">
          How to Participate
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {/* Step 1 */}
          <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition-transform hover:-translate-y-1">
            <div className="text-5xl mb-4 text-blue-500">📝</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Step 1: School Registration
            </h3>
            <p className="text-gray-600">
              Interested schools should fill the Google Form to confirm participation.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition-transform hover:-translate-y-1">
            <div className="text-5xl mb-4 text-green-500">✍️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Step 2: Students Start Writing
            </h3>
            <p className="text-gray-600">
              Students begin writing and submitting their articles to the school coordinators.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition-transform hover:-translate-y-1">
            <div className="text-5xl mb-4 text-purple-500">📤</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Step 3: Schools Submit Entries
            </h3>
            <p className="text-gray-600">
              Schools send the best 4 entries to ADORE via the provided submission link.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition-transform hover:-translate-y-1">
            <div className="text-5xl mb-4 text-red-500">📄</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Step 4: Article Format
            </h3>
            <p className="text-gray-600">
              Articles must be handwritten on A4 size paper before submission.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowToParticipate;
