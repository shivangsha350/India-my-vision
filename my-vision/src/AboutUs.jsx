import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-white to-lime-50 py-20 px-6 md:px-16 rounded-2xl">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <h3 className="uppercase tracking-widest text-sm text-gray-500 mb-2">
            About Us
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-lime-900 mb-6 leading-tight">
            About the Organisation
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            ADORE is a global voluntary network of college students and working
            professionals, who are actively inspiring youth and setting them on
            a path of positive growth.
          </p>
          <p className="text-gray-600 text-base mb-8">
            <strong>Sponsored by Garg Foundation</strong>
          </p>
          <button className="border border-lime-800 text-lime-900 font-semibold px-6 py-3 rounded-lg hover:bg-lime-800 hover:text-white transition">
            Read More
          </button>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-2 gap-6">
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
            alt="Helping hands"
            className="rounded-2xl shadow-md object-cover w-full h-60 md:h-72"
          />
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-0001.jpg"
            alt="Volunteers"
            className="rounded-2xl shadow-md object-cover w-full h-60 md:h-72"
          />
          <img
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80"
            alt="Donation"
            className="rounded-2xl shadow-md object-cover w-full h-60 md:h-72"
          />
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80"
            alt="Charity"
            className="rounded-2xl shadow-md object-cover w-full h-60 md:h-72"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
