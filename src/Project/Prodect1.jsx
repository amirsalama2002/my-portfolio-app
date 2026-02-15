import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://static1.squarespace.com/static/65ea867dce655163db37c70b/t/6670d6fcdd2e11422d259eb4/1730394348059/DALL%C2%B7E%2B2024-06-18%2B08.01.51%2B-%2BA%2Brealistic%2Bimage%2Bof%2Ba%2Bmodern%2C%2Bwell-furnished%2Bliving%2Broom%2Band%2Bkitchen%2Barea%2C%2Bfocusing%2Bon%2Bcommon%2Bareas%2Bthat%2Bmight%2Bbe%2Bmissed%2Bduring%2Ba%2Bdeep%2Bclean.%2BThe%2Bsce%2B%282%29.jpg?format=1500w",
  "https://cdn.apartmenttherapy.info/image/upload/f_auto%2Cq_auto%3Aeco%2Cc_fill%2Cg_auto%2Cw_1500%2Car_3%3A2/at%2Fnews-culture%2F2024-05%2Fclean-one-room-a-day%2Fclean-one-room-a-day-kitchen-diptych",
  "https://i.pinimg.com/736x/5b/0d/9f/5b0d9ffb34d760a7ebf9a68e583af3d0.jpg",
  "https://images.squarespace-cdn.com/content/v1/5a29dce0dc2b4a1889baa060/1690337885849-0EVMHDYVLKLNBEW9XPJ0/509%2Btub%2B2.jpg",
  "https://www.masa7.com/wp-content/uploads/%D8%AA%D9%86%D8%B8%D9%8A%D9%81-%D8%B9%D9%85%D9%8A%D9%82-%D8%B4%D9%82%D8%A9-%D8%B3%D9%83%D9%86%D9%8A%D8%A9-%D9%82%D8%A8%D9%84-%D9%88%D8%A8%D8%B9%D8%AF.webp",
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
            <p className="text-xs text-slate-400">Top / H • Cleaning</p>
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
              Top / H • Cleaning
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
