import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          India - My Vision 2035 award

        </h1>
        <p className="text-lg md:text-xl mb-8">
          Every small act of kindness creates a ripple of positive change. <br />
          Join us in making a difference lives together.
        </p>
        <button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-8 py-3 rounded-lg text-lg transition">
          Donate Now
        </button>
      </div>


      
    </section>


    
  );
};

export default Hero;
