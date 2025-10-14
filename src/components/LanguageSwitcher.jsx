// src/components/LanguageSwitcher.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // تحديد اللغة الحالية واللغة الأخرى للتبديل
  const currentLang = i18n.language;
  const targetLang = currentLang === 'ar' ? 'en' : 'ar';
  
  // النص المعروض على الزر
  const buttonText = currentLang === 'ar' ? 'English' : 'العربية';

  // دالة التبديل: تغير اللغة وتغير اتجاه الصفحة (Direction)
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    
    // الأهم: تغيير اتجاه صفحة HTML
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <button
      onClick={() => changeLanguage(targetLang)}
      className="text-white bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded-full transition duration-300"
    >
      {buttonText}
    </button>
  );
};

export default LanguageSwitcher;