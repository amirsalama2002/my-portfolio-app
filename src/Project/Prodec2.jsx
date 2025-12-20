import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://cdn.dribbble.com/userupload/32875394/file/original-d33f51858dc31debef5cb6bca897daa0.png?format=webp&resize=400x300&vertical=center",
  "https://mir-s3-cdn-cf.behance.net/projects/404/8d36c5225690371.Y3JvcCwyMzk4LDE4NzYsMCww.png",
  "https://uicreative.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/06/22135056/20-landing-page-design-tips-and-ideas.jpg",
  "https://cdn.dribbble.com/userupload/4257771/file/original-81f0df497e52e90f76cd05099c0f25b2.png?format=webp&resize=400x300&vertical=center",
  "https://thewebsitearchitect.com/wp-content/uploads/2021/02/school-website-project.jpg",
];

export default function Product2() {
  const [active, setActive] = useState(0);

  /* 🔁 Auto play (Mobile only) */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mx-auto mt-24 max-w-6xl px-4">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-fuchsia-500/10 blur-3xl" />

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={images[active]}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="h-[260px] w-full rounded-2xl object-cover"
            />
          </AnimatePresence>

          <div className="mt-4 text-center">
            <p className="text-sm font-semibold text-white">
              Project {active + 1}
            </p>
            <p className="text-xs text-slate-400">UI / UX • Frontend</p>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  active === i ? "w-6 bg-blue-400" : "w-2 bg-white/30"
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
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)] rounded-2xl object-cover shadow-2xl"
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
                    ? "border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                    : "border-white/10 opacity-60"
                }`}
              >
                <img src={src} className="h-full w-full object-cover" />
                {active !== index && (
                  <div className="absolute inset-0 bg-black/40" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Caption */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
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
