import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80",
      title: "Give A Helping Hand",
      highlight: "Help Unfortunates",
      desc: "Abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1920&q=80",
      title: "Together We Can",
      highlight: "Change The World",
      desc: "Be part of the mission to uplift communities and bring hope through compassion and action.",
    },
  ];

  return (
    <section className="relative h-[85vh] overflow-hidden group">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-screen flex items-center px-8 md:px-20 text-white"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 max-w-3xl text-left">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                  {slide.title} <br />{" "}
                  <span className="text-[#c53c56]">{slide.highlight}</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100">
                  {slide.desc}
                </p>

                <div className="flex gap-4">
                  <button className="bg-[#2c254e] hover:bg-[#a93148] text-white font-semibold px-8 py-3 rounded-md transition">
                    LEARN MORE
                  </button>
                  <button className="bg-white hover:bg-gray-200 text-[#c53c56] font-semibold px-8 py-3 rounded-md transition">
                    JOIN NOW
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom arrows on hover */}
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
            opacity: 0;
            transition: opacity 0.3s;
          }
          .group:hover .swiper-button-next,
          .group:hover .swiper-button-prev {
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
