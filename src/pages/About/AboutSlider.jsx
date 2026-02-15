import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ClZe-5SdLEe54k3VPOveXLr2z-FJt5C6bw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5RkDTAI1uUIay6rRGu6ByuFRMzJ_Lg9c0g&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6cpWJ34gvFs2P1ajkNS0O8uOc2l9D__lKdg&s",
  "https://royal-serv.com/wp-content/uploads/2022/06/iStock-906777508-e1564417323957-1170x694.jpg?v=1655740632.webp",
  "https://royal-serv.com/wp-content/uploads/2022/08/What-Is-the-Going-Rate-for-House-Cleaning-1-1170x694.jpg?v=1661112561"
];

export default function AboutSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [current, setCurrent] = useState(0);

  // Slider تلقائي كل 3 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-center">

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={isRTL ? "text-right" : "text-left"}
        >
          <h2 className="text-4xl font-extrabold mb-4">
            {t("meroabout.title", "About Top H Cleaning")}
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {t(
              "meroabout.description",
              "Top H Cleaning provides professional cleaning services for homes, offices, and commercial spaces. Our expert team ensures every space is spotless and hygienic, using eco-friendly solutions."
            )}
          </p>
          <p className="text-gray-300 leading-relaxed">
            {t(
              "meroabout.more",
              "We combine years of experience with modern cleaning techniques to guarantee satisfaction and a healthier environment for our clients."
            )}
          </p>
        </motion.div>

        {/* Image Slider Column */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md md:max-w-lg h-80 md:h-96 overflow-hidden rounded-xl shadow-2xl">
            <AnimatePresence>
              <motion.img
                key={current}
                src={images[current]}
                alt={t("about.title", "About Top H Cleaning")}
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? -50 : 50 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-5 -left-5 w-6 h-6 bg-blue-500 rounded-full opacity-70"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-5 -right-5 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrent((current - 1 + images.length) % images.length)}
              className="absolute top-1/2 -left-4 bg-blue-500/70 p-2 rounded-full text-white hover:bg-blue-600 transition"
            >
              ◀
            </button>
            <button
              onClick={() => setCurrent((current + 1) % images.length)}
              className="absolute top-1/2 -right-4 bg-blue-500/70 p-2 rounded-full text-white hover:bg-blue-600 transition"
            >
              ▶
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    idx === current ? "bg-blue-500" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
