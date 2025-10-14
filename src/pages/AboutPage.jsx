import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, Briefcase, CheckCircle, School, Globe } from 'lucide-react';

// ----------------------------------------------------
// Timeline Item
// ----------------------------------------------------
const TimelineItem = ({ titleKey, company, duration, pointsKeys, isRTL, index }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className={`relative p-6 border-blue-500 mb-12 bg-gray-900 shadow-xl rounded-lg
        ${isRTL ? 'border-r-4 border-l-0' : 'border-l-4'}`}
      initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(59,130,246,0.4)" }}
    >
      <div
        className={`absolute w-4 h-4 bg-blue-500 rounded-full mt-1.5 border-4 border-gray-800
          ${isRTL ? 'right-[-8px]' : 'left-[-8px]'}`}
      ></div>

      <h3 className="text-3xl font-bold text-blue-400">{t(titleKey)}</h3>
      <p className="text-xl font-medium text-gray-300">{company} • {duration}</p>

      <ul className={`mt-4 space-y-2 text-gray-400 ${isRTL ? 'list-none pr-4' : 'list-disc pl-6'}`}>
        {pointsKeys.map((key) => (
          <li key={key} className="flex items-start">
            <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-1 ${isRTL ? 'ml-2' : 'mr-2'} text-green-400`} />
            <span>{t(key)}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// ----------------------------------------------------
// Professional Experience
// ----------------------------------------------------
const ProfessionalExperience = ({ isRTL }) => {
  const { t } = useTranslation();

  const professionalExperience = [
    {
      titleKey: 'exp.hash_title',
      company: 'Hash Studio',
      duration: t('exp.hash_duration'),
      pointsKeys: ['exp.hash_p1', 'exp.hash_p2', 'exp.hash_p3'],
    },
    {
      titleKey: 'exp.aqar_title',
      company: 'Aqar Map',
      duration: t('exp.aqar_duration'),
      pointsKeys: ['exp.aqar_p1', 'exp.aqar_p2', 'exp.aqar_p3'],
    },
  ];

  return (
    <motion.section
      className="py-20 bg-gray-800 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-8 max-w-4xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-blue-400 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Briefcase className="w-8 h-8 mr-3 rtl:ml-3 rtl:mr-0" />
          {t('exp.title')}
        </motion.h2>

        <div className="mt-10">
          {professionalExperience.map((exp, index) => (
            <TimelineItem key={index} {...exp} isRTL={isRTL} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// ----------------------------------------------------
// Skills Section
// ----------------------------------------------------
const SkillsSection = ({ isRTL }) => {
  const { t } = useTranslation();

  const skills = [
    { category: t('about.skills.languages'), items: ['PHP', 'JavaScript (ES6+)', 'SQL'] },
    { category: t('about.skills.frameworks'), items: ['Laravel', 'React.js', 'Tailwind CSS'] },
    { category: t('about.skills.databases'), items: ['MySQL', 'SQLite'] },
    { category: t('about.skills.others'), items: ['RESTful APIs', 'JWT', 'OAuth', 'Responsive Design'] },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-20 bg-gray-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-8 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-blue-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('about.no')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-blue-500/30 transition duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-1 bg-gray-700 text-sm font-medium rounded-full text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// ----------------------------------------------------
// Education Section
// ----------------------------------------------------
const EducationSection = ({ isRTL }) => {
  const { t } = useTranslation();

  const contentVariants = {
    hidden: { opacity: 0, x: isRTL ? 30 : -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-20 bg-gray-800 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-8 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-blue-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('home_sections.edu.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={contentVariants}
            className={`p-6 bg-gray-900 rounded-xl shadow-xl ${isRTL ? 'text-right' : 'text-left'}`}
            whileHover={{ scale: 1.05 }}
          >
            <School className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-2xl font-bold mb-2">{t('home_sections.edu.degree')}</h3>
            <p className="text-xl text-gray-300 mb-1">{t('home_sections.edu.major')}</p>
            <p className="text-gray-400">{t('home_sections.edu.academy')}</p>
          </motion.div>

          <motion.div
            variants={contentVariants}
            whileHover={{ scale: 1.05 }}
            className={`p-6 bg-gray-900 rounded-xl shadow-xl ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <Globe className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-2xl font-bold mb-2">{t('home_sections.edu.languages')}</h3>
            <p className="text-xl text-gray-300 mb-1">{t('home_sections.edu.ar')}</p>
            <p className="text-xl text-gray-300 mb-1">{t('home_sections.edu.en')}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// ----------------------------------------------------
// Objective Section
// ----------------------------------------------------
const ObjectiveSection = ({ isRTL }) => {
  const { t } = useTranslation();

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.section
      className="py-20 bg-gray-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-8 max-w-4xl text-center">
        <motion.h2 className="text-4xl font-bold text-blue-400 mb-6" variants={contentVariants}>
          {t('about.objective_title')}
        </motion.h2>

        <motion.p className="text-xl leading-relaxed text-gray-300" variants={contentVariants}>
          {t('about.objective_p1')}
        </motion.p>
        <motion.p className="text-xl leading-relaxed text-gray-300 mt-4" variants={contentVariants}>
          {t('about.objective_p2')}
        </motion.p>

        <motion.div variants={contentVariants} className="mt-10">
          <a
            href="/path/to/your/CV.pdf"
            download
            className="inline-flex items-center px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-full text-white transition duration-300 transform hover:scale-105 shadow-lg"
          >
            <Download className="w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0" />
            {t('about.download_cv')}
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

// ----------------------------------------------------
// Main About Page
// ----------------------------------------------------
const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <div className="py-12 bg-gray-900 text-white text-center">
        <h1 className="text-6xl font-extrabold text-blue-400">{t('nav.about')}</h1>
        <p className="text-xl text-gray-400 mt-2">{t('home.title')}</p>
      </div>

      <ObjectiveSection isRTL={isRTL} />
      <ProfessionalExperience isRTL={isRTL} />
      <SkillsSection isRTL={isRTL} />
      <EducationSection isRTL={isRTL} />
    </motion.div>
  );
};

export default AboutPage;
