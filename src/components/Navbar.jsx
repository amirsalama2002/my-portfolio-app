import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const isRTL = i18n.language === 'ar';

  const languages = [
    { code: 'en', label: 'English', flag: 'EN' },    //(الإنجليزية)
    { code: 'ar', label: 'العربية', flag: 'SA' },   // العربية
    { code: 'fr', label: 'Français', flag: 'FR' },  //(الفرنسية)
    { code: 'de', label: 'Deutsch', flag: 'De' },   //(الألمانية)
    { code: 'ru', label: 'Россия', flag: 'RU' },    //(الروسية)
    { code: 'pt', label: 'Portuguesa', flag: 'PT' }, // (البرتغالية)
    { code: 'हिंदी', label: 'हिंदी', flag: 'हिंदी' },    //(الهندية)
    { code: 'cn', label: 'Zhōngwén', flag: '中文' }, //(الصينية)
    { code: 'esp', label: 'Española', flag: 'ESP' }, //(الإسبانية)
    { code: 'it', label: 'Italiano', flag: 'IT' }, //(الإسبانية)
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    setIsLangOpen(false);
    setIsOpen(false);
  };

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/experience' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15, delay: 0.2 },
    },
  };

  return (
    <motion.nav
      className="bg-gray-900/70 backdrop-blur-xl shadow-lg fixed w-full z-50 border-b border-white/10"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* 1. Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-400 hover:text-blue-500 transition-all"
        >
          {t('home.my_name')}
        </Link>

        {/* 2. Desktop Links */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-4 rtl:space-x-reverse">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white hover:text-blue-400 px-3 py-2 transition duration-200 text-lg font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 3. Desktop Language Dropdown */}
        <div className="hidden md:block relative">
          <motion.button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition backdrop-blur-lg shadow-md"
            animate={isLangOpen ? { rotate: 10 } : { rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <Globe className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-white">
              {i18n.language.toUpperCase()}
            </span>
          </motion.button>

          <AnimatePresence>
            {isLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="absolute right-0 mt-3 w-40 bg-gray-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-xl overflow-hidden"
              >
                {languages.map((lng) => (
                  <button
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)}
                    className={`flex items-center gap-3 w-full px-4 py-2 text-sm text-white transition-all hover:bg-blue-600/50 ${
                      i18n.language === lng.code ? 'bg-blue-700/60' : ''
                    }`}
                  >
                    <span className="text-lg">{lng.flag}</span>
                    <span>{lng.label}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 4. Mobile Menu + Language Icon */}
        <div className={`md:hidden flex items-center gap-3 ${isRTL ? 'order-first' : 'order-last'}`}>
          {/* Language Button (mobile) */}
          <motion.button
            onClick={() => setIsLangOpen(!isLangOpen)}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition"
          >
            <span className="text-xl">{currentLang.flag}</span>
          </motion.button>

          {/* Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 5. Mobile Language Dropdown */}
      <AnimatePresence>
        {isLangOpen && (
          <motion.div
            className="md:hidden bg-gray-800 absolute right-4 top-[72px] w-40 rounded-xl border border-white/10 shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
            {languages.map((lng) => (
              <button
                key={lng.code}
                onClick={() => changeLanguage(lng.code)}
                className={`flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-blue-600/50 ${
                  i18n.language === lng.code ? 'bg-blue-700/60' : ''
                }`}
              >
                <span className="text-lg">{lng.flag}</span>
                <span>{lng.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gray-800 absolute w-full shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-white hover:bg-gray-700 transition duration-200 ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
