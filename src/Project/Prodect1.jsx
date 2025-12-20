import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/project1.png",
  "https://cdn.dribbble.com/userupload/42933287/file/original-ec8f0d04927196d74cec61452e8cae6e.png",
  "https://cdn.dribbble.com/userupload/7766740/file/original-aa2893c6f39b7f9e652d393897c93ad9.jpg",
  "https://cdn.dribbble.com/userupload/7766738/file/original-03367fd9327b6da0d33a32c70bbde424.jpg",
  "https://cdn.dribbble.com/userupload/31534067/file/original-4ef28a208c6a0b5408a3c061543fc098.png",
];

export default function Project1() {
  const [active, setActive] = useState(0);

  /* 🔁 Auto play (Mobile only) */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mx-auto mt-24 max-w-6xl px-4">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-fuchsia-500/10 blur-3xl" />

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={images[active]}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-[260px] w-full rounded-2xl object-cover shadow-xl"
            />
          </AnimatePresence>

          {/* Caption */}
          <div className="mt-4 text-center">
            <p className="text-sm font-semibold text-white">
              Project {active + 1}
            </p>
            <p className="text-xs text-slate-400">UI / UX • Frontend</p>
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  active === i
                    ? "w-6 bg-blue-400"
                    : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <div className="relative h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl shadow-2xl">

          {/* Main Preview */}
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={images[active]}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)] rounded-2xl object-cover shadow-2xl"
            />
          </AnimatePresence>

          {/* Side Thumbnails */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            {images.map((src, index) => (
              <motion.button
                key={index}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                whileHover={{ scale: 1.08 }}
                className={`relative h-20 w-28 overflow-hidden rounded-xl border transition ${
                  active === index
                    ? "border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                    : "border-white/10 opacity-70"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                />
                {active !== index && (
                  <div className="absolute inset-0 bg-black/40" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Caption */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="absolute bottom-6 left-6 rounded-xl bg-black/60 px-5 py-4 backdrop-blur-md"
          >
            <p className="text-base font-semibold text-white">
              Project {active + 1}
            </p>
            <p className="text-sm text-slate-300">
              UI / UX • Frontend Development
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
