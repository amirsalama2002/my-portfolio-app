import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  "https://www.wpp.com/-/media/project/wpp/images/sustainability/2025/wpp_ar_2568x1445_02.png",
  "https://www.wpp.com/-/media/project/wpp/images/news/2025/wpp-open-pro_thumbnail_1800x1200.png?h=600&w=900&la=en-US&hash=E09CB7013415591F6E97BA05226898C2",
  "https://framerusercontent.com/images/Qrhi7ilDJX86hnzulv0A3fiZYg0.jpg?scale-down-to=2048",
  "https://framerusercontent.com/images/bD4aXTtOtS4WOus2QsRkuvTGRSI.png",
  "https://framerusercontent.com/images/2qDJQB7puAsmAKujwytFxfz11w.jpg",
]

/*
  PRO TAILWIND EXPANDING GALLERY
  - SaaS / Agency level UI
  - Flex-grow animation (stable)
  - Glassmorphism container
  - Hover / Click support
  - Mobile swipe friendly
*/

export default function ProductGallery() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative mx-auto mt-24 max-w-6xl px-4">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 blur-3xl" />

      <div
        className="flex h-[220px] md:h-[420px] gap-4 overflow-x-auto md:overflow-hidden snap-x snap-mandatory
        rounded-3xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl shadow-2xl"
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
            {/* Dark overlay when inactive */}
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
              alt="project image"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              animate={{
                scale: active === index ? 1.05 : 1,
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
                    Featured Project {index + 1}
                  </p>
                  <p className="text-xs text-slate-300">
                    Branding • UI/UX • Digital Experience
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
