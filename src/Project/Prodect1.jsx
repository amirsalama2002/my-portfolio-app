import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  "/project1.png",
  "https://cdn.dribbble.com/userupload/42933287/file/original-ec8f0d04927196d74cec61452e8cae6e.png?resize=1024x768&vertical=center",
  "https://cdn.dribbble.com/userupload/7766740/file/original-aa2893c6f39b7f9e652d393897c93ad9.jpg?resize=850x638&vertical=center",
  "https://cdn.dribbble.com/userupload/7766738/file/original-03367fd9327b6da0d33a32c70bbde424.jpg?resize=1024x1024&vertical=center",
  "https://cdn.dribbble.com/userupload/31534067/file/original-4ef28a208c6a0b5408a3c061543fc098.png?resize=1024x768&vertical=center",
]

/**
 * Tailwind PRO – Expanding Gallery (Stable)
 * - flexGrow animation (no layout jump)
 * - glassmorphism + glow
 * - hover & click
 * - mobile snap
 */

export default function Prodect1() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative mx-auto mt-24 max-w-6xl px-4">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-fuchsia-500/10 blur-3xl" />

      <div className="flex h-[220px] md:h-[420px] gap-4 overflow-x-auto md:overflow-hidden snap-x snap-mandatory rounded-3xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl shadow-2xl">
        {images.map((src, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setActive(index)}
            onClick={() => setActive(index)}
            className="relative flex-shrink-0 snap-center cursor-pointer overflow-hidden rounded-2xl"
            animate={{ flexGrow: active === index ? 4 : 1 }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* dim overlay for inactive */}
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
              alt="project preview"
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

            {/* caption */}
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
  )
}
