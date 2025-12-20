import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://cdn.dribbble.com/userupload/12590806/file/original-c3c014ab30a422c3f95ac2e33bad7819.jpg?resize=400x0",
  "https://catchthemes.com/wp-content/uploads/2022/06/Costello-Dark-Dark-Demo.jpg",
  "https://img.freepik.com/premium-psd/3d-web-interface-mockup-with-glass-morphism-effect_103373-2876.jpg",
  "https://framerusercontent.com/images/ZVF7fMWHhogqf1U4Up595M8Yp4.jpg",
  "https://inkbotdesign.com/wp-content/uploads/2021/02/dark-mode-web-design-trend.webp",
];

export default function Product3() {
  const [active, setActive] = useState(0);

  /* 🔁 Auto play (Mobile only) */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % images.length);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mx-auto mt-24 max-w-6xl px-4">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-fuchsia-500/10 via-indigo-500/10 to-sky-500/10 blur-3xl" />

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={images[active]}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.06 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-[270px] w-full rounded-2xl object-cover"
            />
          </AnimatePresence>

          <div className="mt-4 text-center">
            <p className="text-sm font-semibold text-white">
              Project {active + 1}
            </p>
            <p className="text-xs text-slate-400">
              Dark UI • Glassmorphism
            </p>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  active === i ? "w-6 bg-fuchsia-400" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================= DESKTOP (PREMIUM) ================= */}
      <div className="hidden md:block">
        <div className="relative h-[520px] rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl shadow-2xl overflow-hidden">

          {/* Main Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={images[active]}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)] rounded-2xl object-cover shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            />
          </AnimatePresence>

          {/* Thumbnails */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            {images.map((src, index) => (
              <motion.button
                key={index}
                onMouseEnter={() => setActive(index)}
                whileHover={{ scale: 1.08 }}
                className={`relative h-20 w-28 overflow-hidden rounded-xl border transition ${
                  active === index
                    ? "border-fuchsia-400 shadow-[0_0_24px_rgba(217,70,239,0.7)]"
                    : "border-white/10 opacity-60"
                }`}
              >
                <img
                  src={src}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {active !== index && (
                  <div className="absolute inset-0 bg-black/50" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Caption */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="absolute bottom-6 left-6 rounded-xl bg-black/60 px-5 py-4 backdrop-blur-md"
          >
            <p className="text-base font-semibold text-white">
              Project {active + 1}
            </p>
            <p className="text-sm text-slate-300">
              Dark UI • Glassmorphism • Frontend
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
