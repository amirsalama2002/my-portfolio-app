import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://cdn.dribbble.com/userupload/43249497/file/original-7530917d31f7be9c54885ddd95837045.jpg?resize=1024x643&vertical=center",
  "https://cdn.dribbble.com/userupload/42933287/file/original-ec8f0d04927196d74cec61452e8cae6e.png?resize=1024x768&vertical=center",
  "https://cdn.dribbble.com/userupload/7766740/file/original-aa2893c6f39b7f9e652d393897c93ad9.jpg?resize=850x638&vertical=center",
  "https://cdn.dribbble.com/userupload/7766738/file/original-03367fd9327b6da0d33a32c70bbde424.jpg?resize=1024x1024&vertical=center",
  "https://cdn.dribbble.com/userupload/31534067/file/original-4ef28a208c6a0b5408a3c061543fc098.png?resize=1024x768&vertical=center",

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
            alt=""
            className="w-full h-full object-cover"
            animate={{
              filter:
                active === index
                  ? "brightness(1.2) saturate(1.2)"
                  : "brightness(0.75)",
            }}
            transition={{
              duration: 0.5,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
