// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// ملفات الترجمة (سنقوم بإنشائها لاحقًا)
import en from './locales/en/translation.json';
import ar from './locales/ar/translation.json';
import fr from './locales/fr/translation.json';
import de from './locales/de/translation.json';
import ru from './locales/ru/translation.json';
import pt from './locales/pt/translation.json';
import हिंदी from './locales/हिंदी/translation.json';
import cn from './locales/cn/translation.json';
import esp from './locales/esp/translation.json';
import it from './locales/it/translation.json';

i18n
  // للكشف التلقائي عن لغة المتصفح
  .use(LanguageDetector)
  // لتمرير i18n إلى React
  .use(initReactI18next)
  // التهيئة
  .init({
    resources: {
      en: { translation: en }, // الإنجليزية
      ar: { translation: ar }, // العربية
      fr: { translation: fr },
      de: { translation: de },
      ru: { translation: ru },
      pt: { translation: pt },
      हिंदी: { translation: हिंदी },
      cn: { translation: cn },
      esp: { translation: esp },
      it: { translation: it },
    },
    // اللغة الاحتياطية لمنع الأخطاء
    fallbackLng: 'en',
    // لغة البداية الافتراضية إذا لم يتم الكشف عن لغة
    lng: 'en', 
    interpolation: {
      escapeValue: false, // React آمن من XSS تلقائيًا
    },
  });

  i18n
  // ...
  .init({
    // ...
    // عند التهيئة، قم بتعيين اتجاه الصفحة بناءً على اللغة المكتشفة
    onInitialized: (options) => {
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    }
  });

export default i18n;