import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-linear-to-br from-white to-red-50 py-24 px-6 md:px-20 rounded-3xl shadow-sm">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-red-900 leading-tight drop-shadow-sm">
              About the Organisation
            </h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            ADORE is a global volunteer-driven community that brings together
            individuals committed to creating meaningful social impact through
            simple and powerful actions.
            <br />
            <br />
            We believe real change begins with awareness, empathy, compassion,
            and action. Through structured volunteering programs and leadership
            development, ADORE inspires youth to contribute to society while
            building essential life skills, shaping them into compassionate
            leaders and responsible citizens.
            <br />
            <br />
            With members across India and beyond, ADORE provides a platform for
            young minds to engage, learn, and grow through purposeful social
            initiatives.
          </p>

          <a
            href="https://adoreglobal.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="px-7 py-3 text-lg border border-red-800 text-red-900 font-semibold rounded-xl hover:bg-red-800 hover:text-white transition-all shadow-md hover:shadow-lg">
              Read More
            </button>
          </a>
        </div>

        {/* Right Image Layout */}
        <div className="grid grid-cols-2 gap-6">
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
            alt="Helping hands"
            className="rounded-3xl shadow-lg object-cover w-full h-64 md:h-80 transform hover:scale-[1.03] transition duration-300"
          />
          <img
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80"
            alt="Donation"
            className="rounded-3xl shadow-lg object-cover w-full h-64 md:h-80 transform hover:scale-[1.03] transition duration-300"
          />
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80"
            alt="Charity"
            className="rounded-3xl shadow-lg object-cover w-full h-64 md:h-80 transform hover:scale-[1.03] transition duration-300"
          />
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-0001.jpg"
            alt="Volunteers"
            className="rounded-3xl shadow-lg object-cover w-full h-64 md:h-80 transform hover:scale-[1.03] transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
