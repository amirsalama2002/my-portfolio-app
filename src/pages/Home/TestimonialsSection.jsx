import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials = [
    { name: "Ahmed, Dubai", text: t("testimonials.desc1", "Top H Cleaning transformed my space! Highly recommend.") },
    { name: "Sara, Abu Dhabi", text: t("testimonials.desc2", "Fast, reliable and professional service.") },
    { name: "Omar, Sharjah", text: t("testimonials.desc3", "Exceptional cleaning team with great results.") },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1280, // large tablets / small desktops
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480, // mobile portrait
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t("testimonials.title", "Testimonials")}
        </h2>

        <Slider {...settings}>
          {testimonials.map((tst, idx) => (
            <div key={idx} className="p-4 sm:p-6">
              <motion.div
                className="bg-gray-800 p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <p className="text-gray-300 mb-4">{tst.text}</p>
                <h4 className="font-semibold">{tst.name}</h4>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}