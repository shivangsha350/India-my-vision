import React from "react";

const SubmissionProcess = () => {
  return (
    <section className="bg-[#FAFAF8] py-20 px-6 md:px-16">
      {/* Heading Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-lime-900 mb-4">
          Submission Process
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Follow these simple steps to successfully complete your submission.
        </p>
      </div>

      {/* 5 Cards Section */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Step 1 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300 border-t-4 border-lime-500">
          <h4 className="text-4xl font-extrabold text-gray-300 mb-3">01</h4>
          <h3 className="text-xl font-semibold text-lime-900 mb-2">Initial Participation:</h3>
          <p className="text-gray-600">
           Students will write and submit their original handwritten articles to their respective schools.We encourage students to share ideas that are practical and can be implemented by them or within their community, so that the visions presented are realistic and meaningful.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300 border-t-4 border-lime-500">
          <h4 className="text-4xl font-extrabold text-gray-300 mb-3">02</h4>
          <h3 className="text-xl font-semibold text-lime-900 mb-2">Shortlisting by School:</h3>
          <p className="text-gray-600">
           Each school will internally shortlist the best four ideas and submit them to ADORE.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300 border-t-4 border-lime-500">
          <h4 className="text-4xl font-extrabold text-gray-300 mb-3">03</h4>
          <h3 className="text-xl font-semibold text-lime-900 mb-2">Eligibility for E-Certificates:</h3>
          <p className="text-gray-600">
            Any shortlisted ideas demonstrating originality, practicality, and innovation will receive an e-certificate. Selection for e-certificate will be decided by the Internal Award Committee 
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300 border-t-4 border-lime-500">
          <h4 className="text-4xl font-extrabold text-gray-300 mb-3">04</h4>
          <h3 className="text-xl font-semibold text-lime-900 mb-2">Second Round – Final Competition:</h3>
          <p className="text-gray-600">
            Selected ideas will enter the second round of award, where 21 best ideas will be selected. These 21 ideas will be eligible for a round of interview with a panel of judges (external). (By March 2026) 
          </p>
        </div>

        {/* Step 5 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300 border-t-4 border-lime-500 sm:col-span-2 lg:col-span-1 lg:mx-auto">
          <h4 className="text-4xl font-extrabold text-gray-300 mb-3">05</h4>
          <h3 className="text-xl font-semibold text-lime-900 mb-2">Awards & Recognition</h3>
            <ul className="text-gray-600">
                <li>Final winners will be announced, and prizes distributed.</li>
                <li>Total Prize Money: ₹35,000/-</li>
                <li>Best Idea: ₹11,000/-</li>
                <li>Second Best Idea (2nd Winner): ₹5,000/- each</li>
                <li>Special Recognition: ₹1,000/- each</li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default SubmissionProcess;
