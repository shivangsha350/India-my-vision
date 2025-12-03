import React from "react";

const Objectives = () => {
  const data = [
    {
      num: "01",
      title: "Patriotism & Social Awareness",
      desc: "To instill a sense of nationalism and social responsibility among students.",
      img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "02",
      title: "Visionary Mindset",
      desc: "To nurture goal-setting and futuristic thinking in youth.",
      img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "03",
      title: "Problem-Solving Approach",
      desc: "To foster an understanding of current national challenges and practical solutions.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "04",
      title: "Core Indian Values",
      desc: "To promote core values that support a strong, happy, and prosperous India.",
      img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="bg-[#FAFAF8] py-24 px-6 md:px-20">
      {/* Heading Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#2c254e] mb-4 tracking-tight">
          Objectives
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          Our objectives aim to empower youth with values, vision, and responsibility
          to contribute meaningfully to the nation’s growth.
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-10">
        {data.map((item) => (
          <div
            key={item.num}
            className="bg-white rounded-2xl border shadow-md hover:shadow-lg transition p-6"
          >
            {/* Image with zoom effect */}
            <div className="overflow-hidden rounded-xl mb-5">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover rounded-xl transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Number */}
            <div className="text-[#2c254e] text-4xl font-extrabold mb-2 opacity-90">
              {item.num}
            </div>

            {/* Title */}
            <h4 className="text-xl font-bold text-[#2c254e] mb-3">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Objectives;
