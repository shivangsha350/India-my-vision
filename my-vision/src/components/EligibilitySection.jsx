import React from "react";

const EligibilitySection = () => {
  return (
    <section className="py-16 bg-gray-50" id="eligibility">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-4xl font-bold mb-12 text-red-900">
          Eligibility Criteria & Participation Guidelines
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1">
            <div className="text-blue-600 text-5xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Who Can Participate?
            </h3>
            <p className="text-gray-600">
              Students studying in Classes VIII to XII.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1">
            <div className="text-green-600 text-5xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Article Language
            </h3>
            <p className="text-gray-600">
              Articles must be written in English or Hindi.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1">
            <div className="text-purple-600 text-5xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Participation Details
            </h3>
            <p className="text-gray-600">
              Program is conducted completely online. No registration fees.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
