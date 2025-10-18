import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast'; // ✅ إضافه المكتبة

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const isRTL = i18n.language === 'ar';

  const languages = [
    { code: 'en', label: t('lango.en'), flag: 'EN' },
    { code: 'ar', label: t('lango.ar'), flag: 'AR' },
    { code: 'fr', label: t('lango.fr'), flag: 'FR' },
    { code: 'de', label: t('lango.de'), flag: 'DE' },
    { code: 'ru', label: t('lango.ru'), flag: 'RU' },
    { code: 'pt', label: t('lango.pt'), flag: 'PT' },
    { code: 'हिंदी', label: t('lango.hi'), flag: 'IN' },
    { code: 'cn', label: t('lango.cn'), flag: 'CN' },
    { code: 'esp', label: t('lango.es'), flag: 'ES' },
    { code: 'it', label: t('lango.it'), flag: 'IT' },
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    setIsLangOpen(false);
    setIsOpen(false);

    // ✅ Toast يظهر عند تغيير اللغة
    const lang = languages.find(l => l.code === lng);
    toast.success(`Language changed to ${lang?.label} ${lang?.flag}`, {
      style: {
        background: '#111827',
        color: '#fff',
        border: '1px solid #2563eb',
        padding: '10px 16px',
        borderRadius: '10px',
      },
      iconTheme: { primary: '#2563eb', secondary: '#fff' },
    });
  };

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/experience' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 15, delay: 0.2 } },
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} /> {/* ✅ مكان عرض التوست */}

      <motion.nav
        className="bg-gray-900/70 backdrop-blur-xl shadow-lg fixed w-full z-50 border-b border-white/10"
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-blue-400 hover:text-blue-500 transition-all"
          >
            {t('home.my_name')}
          </Link>

          {/* Desktop Links */}
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

          {/* Desktop Language Dropdown */}
          <div className="hidden md:block relative">
            <motion.button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center cursor-pointer
 gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition backdrop-blur-lg shadow-md"
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
                      className={`flex items-center cursor-pointer
  gap-3 w-full px-4 py-2 text-sm text-white hover:bg-blue-600/50 ${
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

          {/* Mobile Controls */}
          <div className={`md:hidden flex items-center gap-3 ${isRTL ? 'order-first' : 'order-last'}`}>
            <motion.button
              onClick={() => setIsLangOpen(!isLangOpen)}
              whileTap={{ scale: 0.9 }}
              className="flex items-center  justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition"
            >
              <span className="text-xl">{currentLang.flag}</span>
            </motion.button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdowns */}
        <AnimatePresence>
          {isLangOpen && (
            <motion.div
              className="md:hidden  bg-gray-800 absolute right-4 top-[72px] w-40 rounded-xl border border-white/10 shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.25 }}
            >
              {languages.map((lng) => (
                <button
                  key={lng.code}
                  onClick={() => changeLanguage(lng.code)}
                  className={`flex items-center   gap-3 w-full px-4 py-2 text-sm text-white hover:bg-blue-600/50 ${
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
    </>
  );
};

export default Navbar;
