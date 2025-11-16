import React from "react";

const SubmissionProcess = () => {
  const steps = [
    {
      num: "01",
      title: "Initial Participation",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60",
      desc:
        "Students will write and submit their original handwritten articles to their respective schools. We encourage practical and realistic ideas that can be implemented by students or within their community.",
    },
    {
      num: "02",
      title: "Shortlisting by School",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
      desc:
        "Each school will internally shortlist the best four ideas and submit them to ADORE.",
    },
    {
      num: "03",
      title: "Eligibility for E-Certificates",
      img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=60",
      desc:
        "Ideas showcasing originality, practicality, and innovation will receive an e-certificate, based on evaluation by the Internal Award Committee.",
    },
    {
      num: "04",
      title: "Second Round – Final Competition",
      img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=60",
      desc:
        "From the shortlisted entries, 21 best ideas will be chosen. These participants will attend an interview round with an external judging panel (By March 2026).",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-20">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold text-red-900 mb-4 tracking-tight">
          Submission Process
        </h2>ṅ
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Follow these simple steps to successfully complete your submission.
        </p>
      </div>

      {/* Step Cards */}
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.num}
            className="bg-[#FAFAF8] rounded-3xl shadow-md overflow-hidden border border-gray-200 hover:border-gray-300 transition-all hover:-translate-y-1 hover:shadow-xl group"
          >
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-10">
              <div className="text-gray-900 text-6xl font-extrabold opacity-20 mb-3 group-hover:opacity-30 transition">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:underline underline-offset-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}

        {/* Step 5 - Awards */}
        <div className="bg-[#FAFAF8] rounded-3xl shadow-md overflow-hidden border border-gray-200 hover:border-gray-300 transition-all hover:-translate-y-1 hover:shadow-xl group sm:col-span-2 lg:col-span-1 lg:mx-auto">
          <img
            src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=800&q=60"
            alt="Awards & Recognition"
            className="w-full h-48 object-cover"
          />
          <div className="p-10">
            <div className="text-gray-900 text-6xl font-extrabold opacity-20 mb-3 group-hover:opacity-30 transition">
              05
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:underline underline-offset-4">
              Awards & Recognition
            </h3>
            <ul className="text-gray-600 space-y-2 leading-relaxed">
              <li>Final winners will be announced, and prizes distributed.</li>
              <li>Total Prize Money: ₹35,000/-</li>
              <li>Best Idea: ₹11,000/-</li>
              <li>Second Best Idea (2nd Winner): ₹5,000/- each</li>
              <li>Special Recognition: ₹1,000/- each</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionProcess;
