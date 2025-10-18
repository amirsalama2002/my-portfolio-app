import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [showTopButton, setShowTopButton] = useState(false);

  // ✅ إظهار الزر عند النزول لأسفل
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:hamirsalama@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/amir-salama-7b3408289/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/amirsalama2002', label: 'GitHub' },
  ];

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/experience' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <footer className="relative bg-[#0a0f1f] text-white pt-14 pb-6 border-t border-blue-900/30">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* 🔹 الأقسام الثلاثة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-800/50">
          {/* 1. الاسم والوصف */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-2xl font-extrabold text-blue-400 mb-2 hover:tracking-wide transition-all duration-300">
              {t('home.my_name')}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('home.title')}
            </p>
          </div>

          {/* 2. روابط سريعة */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="text-xl font-semibold text-white mb-4">
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-blue-400 transition duration-200 text-sm hover:pl-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. التواصل */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="text-xl font-semibold text-white mb-4">
              {isRTL ? 'تواصل معي' : 'Connect'}
            </h4>
            <div
              className={`flex ${
                isRTL ? 'justify-end space-x-reverse' : 'justify-start'
              } space-x-5`}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={link.label}
                >
                  <link.icon
                    size={26}
                    className="text-gray-400 group-hover:text-blue-400 transform group-hover:-translate-y-1 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 🔹 الحقوق */}
        <div className="pt-6 text-center text-gray-500 text-sm space-y-2">
          <p className="flex justify-center items-center gap-1">
            {isRTL ? 'صُنع بـ' : 'Made with'}
            <span className="text-red-500">❤</span>
            {isRTL ? 'باستخدام React وLaravel' : 'using React & Laravel'}
          </p>
          <p className="text-gray-500/80">
            &copy; {new Date().getFullYear()} {t('home.my_name')} —{' '}
            {isRTL ? 'جميع الحقوق محفوظة' : 'All rights reserved.'}
          </p>
        </div>
      </div>

      {/* 🔹 زر الصعود للأعلى */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 cursor-pointer right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 active:scale-95"
          aria-label="Back to top"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
