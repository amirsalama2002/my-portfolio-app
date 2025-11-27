import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://www.wpp.com/-/media/project/wpp/images/sustainability/2025/wpp_ar_2568x1445_02.png",
  "https://www.wpp.com/-/media/project/wpp/images/news/2025/wpp-open-pro_thumbnail_1800x1200.png?h=600&w=900&la=en-US&hash=E09CB7013415591F6E97BA05226898C2",
  "https://framerusercontent.com/images/Qrhi7ilDJX86hnzulv0A3fiZYg0.jpg?scale-down-to=2048",
  "https://framerusercontent.com/images/bD4aXTtOtS4WOus2QsRkuvTGRSI.png",
  "https://framerusercontent.com/images/2qDJQB7puAsmAKujwytFxfz11w.jpg",
];

export default function Prodect1() {
  const [active, setActive] = useState(0);

  return (
    <div
      className="
        flex 
        gap-4 
        w-[100%]
        max-w-[1000px]
        mx-auto 
        mt-20
        p-4
        bg-gray-900 
        rounded-2xl
        overflow-x-auto
        md:overflow-hidden
      "
    >
      {images.map((src, index) => (
        <motion.div
          key={index}
          onMouseEnter={() => setActive(index)}
          onClick={() => setActive(index)}
          className="
            h-[200px] 
            md:h-[350px] 
            overflow-hidden 
            rounded-xl 
            cursor-pointer
            flex-shrink-0 
            snap-center
          "
          animate={{
            flex: active === index ? 4 : 1,
            width: active === index ? "80%" : "60%",
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          <motion.img
            src={src}
            alt="project image"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            srcSet={`${src} 400w, ${src} 800w, ${src} 1200w`}
            sizes="(max-width: 768px) 400px, (max-width: 1200px) 800px, 1200px"
            className="w-full h-full object-cover"
            animate={{
              filter:
                active === index
                  ? "brightness(1.2) saturate(1.2)"
                  : "brightness(0.75)",
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      ))}
    </div>
  );
}
