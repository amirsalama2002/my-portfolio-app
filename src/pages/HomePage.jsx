// src/pages/HomePage.jsx (النسخة النهائية مع Grid Layout و 6 أقسام)

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Server, Zap, Globe, Gauge, HardHat, School, Cpu } from 'lucide-react'; 

// ----------------------------------------------------
// تعريف المكونات المساعدة (Skills, Stats, Objective, Featured, Education)
// ----------------------------------------------------

// (1) مكون سكشن المهارات الأساسية (Core Skills Badges)
const SkillsSection = ({ isRTL }) => {
    const { t } = useTranslation();
    const coreSkills = [
        { icon: Code, title: "Laravel/PHP", desc: t('home_sections.skills.p1'), color: "bg-red-600" },
        { icon: Zap, title: "React.js/Frontend", desc: t('home_sections.skills.p2'), color: "bg-cyan-500" },
        { icon: Globe, title: "Tailwind CSS", desc: t('home_sections.skills.p3'), color: "bg-teal-500" },
        { icon: Cpu, title: "Database & API", desc: t('home_sections.skills.p4'), color: "bg-indigo-600" }, 
    ];
    
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };
      
     // 1. تحديث أنيميشن الصورة: أنيميشن دوران 3D مستمر
    const image3DVariant = { 
        hidden: { opacity: 0, scale: 0.8, rotateX: 90 }, // يبدأ من منظور 3D
        visible: { opacity: 1, scale: 1, rotateX: 0, transition: { duration: 1.0, type: "spring", stiffness: 100, delay: 0.5 } },
        // حركة مستمرة: دوران خفيف جداً على محور Y (لتجنب الدوخة)
        continuous: {
            rotateY: [0, 2, -2, 0], // تذبذب بين -2 و 2 درجة
            transition: {
                duration: 6, // 6 ثواني
                ease: "easeInOut",
                repeat: Infinity, 
            }
        }
    };
    return (
        <section className="py-20 bg-gray-900 dark:bg-gray-800">
            <div className="container mx-auto px-8 max-w-6xl">
                <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">{t('home_sections.skills.title')}</h2>
                
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-8" 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {coreSkills.map((skill, index) => (
                        <motion.div 
                            key={index}
                            className="p-6 bg-gray-800 dark:bg-gray-900 rounded-xl shadow-2xl flex flex-col items-center text-center hover:shadow-blue-500/30 transition duration-300 transform hover:scale-[1.03]"
                            variants={cardVariants}
                        >
                            <skill.icon className={`w-12 h-12 mb-4 ${skill.color} p-2 rounded-lg text-white`} />
                            <h3 className="text-xl font-semibold mb-2 text-white">{skill.title}</h3>
                            <p className="text-gray-400 text-sm">{skill.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// (2) مكون سكشن الإحصائيات والإنجازات (Stats/Highlights)
const StatsSection = ({ isRTL }) => {
    const { t } = useTranslation();
    const stats = [
        { icon: Server, number: "2+", label: t('home_sections.stats.l1'), color: "text-green-400" },
        { icon: Gauge, number: "30%", label: t('home_sections.stats.l2'), color: "text-red-400" },
        { icon: Code, number: "10+", label: t('home_sections.stats.l3'), color: "text-yellow-400" },
        { icon: Zap, number: "20%", label: t('home_sections.stats.l4'), color: "text-blue-400" },
    ];

    const statVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <section className="py-20 bg-gray-800 dark:bg-gray-900">
            <div className="container mx-auto px-8 max-w-6xl">
                <h2 className="text-4xl font-bold text-center text-white mb-12">{t('home_sections.stats.title')}</h2>
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index}
                            className="p-6 bg-gray-900 rounded-xl shadow-lg transform transition duration-300 hover:shadow-blue-500/20"
                            variants={statVariants}
                        >
                            <stat.icon className={`w-12 h-12 mx-auto mb-3 ${stat.color}`} />
                            <p className="text-5xl font-extrabold mb-1">{stat.number}</p>
                            <p className="text-gray-400 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// (3) مكون سكشن Why Me? (ملخص الهدف)
const ObjectiveSection = ({ isRTL }) => {
    const { t } = useTranslation();
    
    const contentVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-8 max-w-4xl text-center">
                <motion.h2 
                    className="text-4xl font-bold text-blue-400 mb-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={contentVariants}
                >
                    {t('home_sections.objective.title')}
                </motion.h2>
                <motion.p 
                    className="text-xl leading-relaxed text-gray-300"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    variants={contentVariants}
                >
                    {t('about.objective_p1')}
                </motion.p>
                <motion.p 
                    className="text-xl leading-relaxed text-gray-300 mt-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    variants={contentVariants}
                >
                    {t('about.objective_p2')}
                </motion.p>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                    variants={contentVariants}
                >
                    <Link
                        to="/about"
                        className="mt-10 inline-block px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-full text-white transition duration-300 transform hover:scale-105 shadow-lg"
                    >
                        {t('home_sections.objective.read_more')}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

// (4) مكون سكشن المشروع المميز (Featured Project)
const FeaturedProjectSection = ({ isRTL }) => {
    const { t } = useTranslation();
    
    const project = {
        title: t('projects.devdocs.title'),
        desc: t('projects.devdocs.desc'),
        liveLink: 'https://devdocs-language.netlify.app',
        github: null, 
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };

    return (
        <section className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-8 max-w-6xl">
                <h2 className="text-4xl font-bold text-center text-white mb-12">{t('home_sections.featured.title')}</h2>
                
                <motion.div 
                    className="p-10 bg-gray-900 rounded-xl shadow-2xl border-l-4 border-blue-500 transform transition duration-300 hover:border-blue-300"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={cardVariants}
                >
                    <h3 className="text-3xl font-bold text-blue-400 mb-2">{project.title}</h3>
                    <p className="text-xl text-gray-300 mb-6">{project.desc}</p>
                    
                    <Link
                        to="/experience"
                        className="px-6 py-2 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
                    >
                        {t('home_sections.featured.view_all')}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

// (5) مكون سكشن التعليم واللغات (Education & Languages)
const EducationSection = ({ isRTL }) => {
    const { t } = useTranslation();
    
    const contentVariants = {
        hidden: { opacity: 0, x: isRTL ? 30 : -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-8 max-w-6xl">
                <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">{t('home_sections.edu.title')}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* التعليم */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={contentVariants}
                        className={`p-6 bg-gray-800 rounded-xl shadow-xl ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                        <School className="w-8 h-8 text-blue-400 mb-3" />
                        <h3 className="text-2xl font-bold mb-2">{t('home_sections.edu.degree')}</h3>
                        <p className="text-xl text-gray-300 mb-1">{t('home_sections.edu.major')}</p>
                        <p className="text-gray-400">{t('home_sections.edu.academy')}</p>
                    </motion.div>
                    
                    {/* اللغات */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2 }}
                        variants={contentVariants}
                        className={`p-6 bg-gray-800 rounded-xl shadow-xl ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                        <Globe className="w-8 h-8 text-blue-400 mb-3" />
                        <h3 className="text-2xl font-bold mb-2">{t('home_sections.edu.languages')}</h3>
                        <p className="text-xl text-gray-300 mb-1">{t('home_sections.edu.ar')}</p>
                        <p className="text-xl text-gray-300 mb-1">{t('home_sections.edu.en')}</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


// ----------------------------------------------------
// (6) المكون الرئيسي (HomePage) - التجميع
// ----------------------------------------------------
const HomePage = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar'; 

    // إعدادات Framer Motion لـ Hero Section (مُعادلة)
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } };
    const textItemVariants = { hidden: { opacity: 0, x: isRTL ? 50 : -50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 12 } } };
    const imageVariant = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80, damping: 10, delay: 0.5 } } };


    // 1. تحديث أنيميشن الصورة: حركة دوران خفيف مستمر (لـ Scale/Zoom)
    const imageVariants = { 
        hidden: { opacity: 0, scale: 0.9 }, 
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80, damping: 10, delay: 0.5 } },
        // حركة مستمرة: تكبير وتصغير خفيف ومستمر
        continuous: {
            scale: [1, 1.02, 1], // تذبذب بين 100% و 102% من الحجم
            transition: {
                duration: 5, // 5 ثواني لكل دورة
                ease: "easeInOut",
                repeat: Infinity, 
                repeatType: "reverse" 
            }
        }
    };

    
  
    return (
        <>
            {/* -------------------- 1. سكشن الترحيب (Hero Section) - Grid Layout -------------------- */}
             {/* -------------------- Hero Section -------------------- */}
<section 
  id="hero" 
  className="h-screen bg-gray-900 text-white flex justify-center pt-24 pb-20"
>
  <div className="container mx-auto px-8 max-w-6xl flex-grow"> 
    
    {/* Grid Layout متجاوب: النص 7/12 والصورة 5/12 */}
    <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center h-full`}>
      
      {/* النص والأزرار (7/12) */}
      <motion.div
        className="md:col-span-7"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
        }}
      >
        <motion.p 
          className="text-2xl font-light mb-3 text-blue-400"
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 12 } } }}
        >
          {t('home.greeting')}
        </motion.p>
        <motion.h1 
          className="text-6xl md:text-7xl font-extrabold mb-4"
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 12 } } }}
        >
          {t('home.name')}
        </motion.h1>
        <motion.h2 
          className="text-3xl md:text-4xl font-light text-gray-300 mb-8"
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 12 } } }}
        >
          {t('home.title')}
        </motion.h2>

        <motion.div className="flex mt-10 space-x-4" variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { delay: 0.2 } } }}>
          <Link 
            to="/contact" 
            className="px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-full transition duration-300 transform hover:scale-105 shadow-xl"
          >
            {t('home.hire_me')}
          </Link>
          <Link 
            to="/experience" 
            className="px-8 py-3 text-lg font-semibold border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-full transition duration-300 transform hover:scale-105"
          >
            {t('home.view_work')}
          </Link>
        </motion.div>
      </motion.div>

      {/* الصورة الشخصية (5/12) - مخفية على الموبايل */}
      <motion.div
        className="hidden md:flex md:col-span-5 justify-center items-center"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.5)] overflow-hidden bg-gradient-to-br from-blue-600/20 to-blue-900/30 backdrop-blur-sm"
        >
          <motion.img
            src="/Gemini_Generated_Image_qgl5alqgl5alqgl5.png"
            alt="Amir Salama - Full Stack Developer"
            className="w-full h-full object-cover rounded-full"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* تأثير إضاءة نابضة خارجية */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/40 animate-pulse" />
        </motion.div>
      </motion.div>

    </div>
  </div>
</section>

            
            {/* -------------------- 2. سكشن الإحصائيات (Stats Section) -------------------- */}
            <StatsSection isRTL={isRTL} /> 

            {/* -------------------- 3. سكشن المهارات الأساسية (Core Skills) -------------------- */}
            <SkillsSection isRTL={isRTL} />

            {/* -------------------- 4. سكشن لماذا أنا؟ (Objective Summary) -------------------- */}
            <ObjectiveSection isRTL={isRTL} />

            {/* -------------------- 5. سكشن المشروع المميز (Featured Project) -------------------- */}
            <FeaturedProjectSection isRTL={isRTL} />

            {/* -------------------- 6. سكشن التعليم واللغات (Education & Languages) -------------------- */}
            <EducationSection isRTL={isRTL} />
        </>
    );
};

export default HomePage;