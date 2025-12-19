import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://cdn.dribbble.com/userupload/32875394/file/original-d33f51858dc31debef5cb6bca897daa0.png?format=webp&resize=400x300&vertical=center",
  "https://mir-s3-cdn-cf.behance.net/projects/404/8d36c5225690371.Y3JvcCwyMzk4LDE4NzYsMCww.png",
  "https://uicreative.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/06/22135056/20-landing-page-design-tips-and-ideas.jpg",
  "https://cdn.dribbble.com/userupload/4257771/file/original-81f0df497e52e90f76cd05099c0f25b2.png?format=webp&resize=400x300&vertical=center",
  "https://thewebsitearchitect.com/wp-content/uploads/2021/02/school-website-project.jpg",
];

export default function Prodect2() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  // Loop auto-scroll for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          left: active * scrollRef.current.offsetWidth / 3,
          behavior: "smooth",
        });
      }
    }, 4000); // كل 4 ثواني
    return () => clearInterval(interval);
  }, [active]);

  return (
    <section className="relative mx-auto mt-24 max-w-6xl px-4">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-fuchsia-500/10 blur-3xl" />

      {/* Gallery container */}
      <div
        ref={scrollRef}
        className="flex h-[220px] md:h-[420px] gap-4 overflow-x-auto md:overflow-hidden snap-x snap-mandatory rounded-3xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl shadow-2xl"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setActive(index)}
            onClick={() => setActive(index)}
            className="relative flex-shrink-0 snap-center cursor-pointer overflow-hidden rounded-2xl"
            animate={{ flexGrow: active === index ? 4 : 1 }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Dim overlay for inactive */}
            <AnimatePresence>
              {active !== index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 bg-black/40"
                />
              )}
            </AnimatePresence>

            <motion.img
              src={src}
              alt={`project ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              animate={{
                scale: active === index ? 1.06 : 1,
                filter:
                  active === index
                    ? "brightness(1.15) saturate(1.15)"
                    : "brightness(0.7)",
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Caption */}
            <AnimatePresence>
              {active === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/60 px-4 py-3 backdrop-blur-md"
                >
                  <p className="text-sm font-semibold text-white">
                    Project {index + 1}
                  </p>
                  <p className="text-xs text-slate-300">UI / UX • Frontend</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
