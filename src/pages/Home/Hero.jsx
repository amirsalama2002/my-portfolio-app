import React from "react";
import { motion } from "framer-motion";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  // مصفوفة الكور للتحريك
  const floatingCores = [
    { size: 12, color: "bg-primary", x: "left-1/4", y: "bottom-10", duration: 4 },
    { size: 8, color: "bg-accent", x: "right-1/3", y: "top-10", duration: 5 },
    { size: 6, color: "bg-yellow-400", x: "left-10", y: "top-1/2", duration: 6 },
    { size: 10, color: "bg-green-400", x: "right-20", y: "bottom-20", duration: 5 },
    { size: 14, color: "bg-red-500", x: "left-1/2", y: "top-20", duration: 7 },
    { size: 9, color: "bg-blue-400", x: "right-1/4", y: "top-1/3", duration: 6 },
    { size: 7, color: "bg-pink-500", x: "left-2/3", y: "bottom-1/4", duration: 5 },
    { size: 11, color: "bg-purple-500", x: "right-2/3", y: "bottom-1/3", duration: 8 },
    { size: 5, color: "bg-orange-400", x: "left-1/3", y: "top-2/3", duration: 4 },
    { size: 8, color: "bg-teal-400", x: "right-1/5", y: "top-1/2", duration: 6 },
  ];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image + Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20231221/pngtree-environmental-sanitation-and-sanitation-workers-garbage-cleaning-and-sanitation-workers-day-photo-image_15543972.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 50 },
            color: { value: ["#0EA5E9", "#34D399", "#FACC15"] },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: { min: 2, max: 6 } },
            move: { enable: true, speed: 1, outModes: "bounce" },
          },
        }}
        className="absolute inset-0"
      />

      {/* Hero Content */}
      <div className="relative text-center px-4 max-w-4xl z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg"
        >
          {t("hero.title", "Professional Cleaning Services")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-xl sm:text-2xl text-gray-200 drop-shadow"
        >
          {t("hero.subtitle", "For Homes, Offices & Businesses")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-300">
  {t("hero.cta1", "Get a Free Quote")}
</button>

          <button className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition transform">
            {t("hero.cta2", "Our Services")}
          </button>
        </motion.div>
      </div>

      {/* Floating Animated Elements */}
      {floatingCores.map((core, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${core.x} ${core.y} ${core.color} rounded-full opacity-70`}
          style={{ width: `${core.size}rem`, height: `${core.size}rem` }}
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: core.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </section>
  );
}
