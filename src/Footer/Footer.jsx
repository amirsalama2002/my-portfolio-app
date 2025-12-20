import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socials = [
    { icon: Mail, href: "mailto:hamirsalama@gmail.com" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/amir-salama-7b3408289/" },
    { icon: Github, href: "https://github.com/amirsalama2002" },
  ];

  const nav = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.services"), path: "/experience" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050814] text-white">
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_55%)]" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-14 md:grid-cols-3 pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div className={isRTL ? "text-right" : "text-left"}>
            <h2 className="text-3xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t("home.my_name")}
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed max-w-sm">
              {t("home.title")}
            </p>
          </div>

          {/* Navigation */}
          <div className={isRTL ? "text-right" : "text-left"}>
            <h4 className="mb-4 font-semibold text-lg">
              {isRTL ? "روابط سريعة" : "Quick Links"}
            </h4>

            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group relative inline-block text-gray-400 hover:text-blue-400 transition"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className={isRTL ? "text-right" : "text-left"}>
            <h4 className="mb-4 font-semibold text-lg">
              {isRTL ? "تواصل معي" : "Connect"}
            </h4>

            <div className={`flex ${isRTL ? "justify-end space-x-reverse" : ""} space-x-5`}>
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  whileHover={{ y: -6, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl bg-white/5 backdrop-blur-lg 
                             hover:bg-blue-500/20 border border-white/10
                             shadow-[0_0_0_rgba(0,0,0,0)]
                             hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
                             transition"
                >
                  <s.icon className="text-blue-400" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 text-center text-sm text-gray-400 space-y-2">
          <p>
            {isRTL ? "صُنع بـ" : "Made with"}{" "}
            <span className="text-red-500">❤</span>{" "}
            {isRTL ? "React و Laravel" : "React & Laravel"}
          </p>
          <p>
            © {new Date().getFullYear()} {t("home.my_name")} —{" "}
            {isRTL ? "جميع الحقوق محفوظة" : "All rights reserved"}
          </p>
        </div>
      </div>

      {/* Scroll To Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full
                       bg-gradient-to-r from-blue-600 to-cyan-500
                       shadow-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]"
          >
            <ArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
