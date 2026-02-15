import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ===== Services Section =====
export function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    { icon: "🏠", title: t("hero.residential", "Residential Cleaning") },
    { icon: "🏢", title: t("hero.commercial", "Commercial Cleaning") },
    { icon: "🧽", title: t("hero.deep", "Deep Cleaning") },
    { icon: "🚚", title: t("hero.move", "Move In / Move Out") },
    { icon: "🧼", title: t("hero.carpet", "Carpet Cleaning") },
    { icon: "🪟", title: t("hero.window", "Window Cleaning") },
  ];

  return (
    <section className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">{t("hero.cta2", "Our Services")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {t("hero.desc", "High-quality professional cleaning for your home or office.")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Why Choose Us Section =====
export function WhyChooseUsSection() {
  const { t } = useTranslation();

  const items = [
    { icon: "🏆", title: t("hero.experience", "10+ Years Experience") },
    { icon: "📁", title: t("hero.projects", "1200+ Projects") },
    { icon: "☎️", title: t("hero.support", "24/7 Support") },
    { icon: "🌱", title: t("hero.eco", "Eco-Friendly") },
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="p-6"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ===== Testimonials Section =====
export function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials = [
    { name: "Amir, Dubai", text: t("hero.ahmed", "Top H Cleaning transformed my space! Highly recommend.") },
    { name: "Sara, Abu Dhabi", text: t("hero.sara", "Fast, reliable and professional service.") },
    { name: "Omar, Sharjah", text: t("hero.omar", "Exceptional cleaning team with great results.") },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, arrows: true } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <section className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">{t("hero.testimonials", "Testimonials")}</h2>
        <Slider {...settings}>
          {testimonials.map((tst, idx) => (
            <div key={idx} className="p-4 sm:p-6">
              <motion.div
                className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
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
