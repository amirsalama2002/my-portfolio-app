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
    const onScroll = () => setShowTop(window.scrollY > 260);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socials = [
    { icon: Mail, href: "mailto:hamirsalama@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/amir-salama-7b3408289/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/amirsalama2002", label: "GitHub" },
  ];

  const nav = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.services"), path: "/experience" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#060b1a] via-[#0b122a] to-[#060b1a] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className={isRTL ? "text-right" : "text-left"}>
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t("home.my_name")}
            </h3>
            <p className="mt-3 text-gray-400 leading-relaxed max-w-sm">
              {t("home.title")}
            </p>
          </div>

          {/* Links */}
          <div className={isRTL ? "text-right" : "text-left"}>
            <h4 className="text-lg font-semibold mb-4">{isRTL ? "روابط سريعة" : "Quick Links"}</h4>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-blue-400 transition-all hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className={isRTL ? "text-right" : "text-left"}>
            <h4 className="text-lg font-semibold mb-4">{isRTL ? "تواصل معي" : "Connect"}</h4>
            <div className={`flex ${isRTL ? "justify-end space-x-reverse" : "justify-start"} space-x-5`}>
              {socials.map((s) => (
                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-3 rounded-xl bg-white/5 hover:bg-blue-500/20 transition"
                >
                  <s.icon className="text-blue-400" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center text-sm text-gray-400 space-y-2">
          <p className="flex justify-center gap-1">
            {isRTL ? "صُنع بـ" : "Made with"} <span className="text-red-500">❤</span> {isRTL ? "React و Laravel" : "React & Laravel"}
          </p>
          <p>
            © {new Date().getFullYear()} {t("home.my_name")} — {isRTL ? "جميع الحقوق محفوظة" : "All rights reserved"}
          </p>
        </div>
      </div>

      {/* Scroll Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 shadow-xl"
            aria-label="Back to top"
          >
            <ArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}