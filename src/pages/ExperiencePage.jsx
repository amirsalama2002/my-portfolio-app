import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gauge, Code, Server, Zap, Briefcase, GitBranch, ArrowRight, CheckCircle, Smartphone } from 'lucide-react'; 

// ----------------------------------------------------
// المكونات المساعدة الضرورية داخل هذا الملف أو يتم استيرادها
// ----------------------------------------------------

// 1. مكون عرض عنصر واحد في المخطط الزمني (Timeline Item)
const TimelineItem = ({ titleKey, company, duration, pointsKeys, isRTL, index }) => {
    const { t } = useTranslation();

    return (
        <motion.div 
            className={`relative p-6 border-blue-500 mb-12 bg-gray-900 shadow-xl rounded-lg 
                        ${isRTL ? 'border-r-4 border-l-0' : 'border-l-4'}`}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {/* النقطة على الخط الزمني */}
            <div className={`absolute w-4 h-4 bg-blue-500 rounded-full mt-1.5 border-4 border-gray-800 
                        ${isRTL ? 'right-[-8px]' : 'left-[-8px]'}`}></div>
            
            <h3 className="text-3xl font-bold text-blue-400">{t(titleKey)}</h3>
            <p className="text-xl font-medium text-gray-300">{company} • {duration}</p>
            
            <ul className={`mt-4 space-y-2 text-gray-400 
                        ${isRTL ? 'list-none pr-4' : 'list-disc pl-6'}`}>
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

// 2. مكون ProfessionalExperience (الخبرة العملية)
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
                <h2 className="text-4xl font-bold text-center mb-12 text-blue-400 flex items-center justify-center">
                    <Briefcase className="w-8 h-8 mr-3 rtl:ml-3 rtl:mr-0" />
                    {t('exp.title')} 
                </h2>
                <div className="mt-10">
                    {professionalExperience.map((exp, index) => (
                        <TimelineItem key={index} {...exp} isRTL={isRTL} index={index} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};


// 3. مكون بطاقة المشروع (Project Card)
const ProjectCard = ({ title, descriptionKey, github, liveLink, isRTL, index }) => {
    const { t } = useTranslation();

    return (
        <motion.div 
            className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-blue-500/30 transition duration-300 flex flex-col justify-between h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
        >
            <div>
                <Smartphone className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">{t(descriptionKey)}</p>
            </div>
            
            <div className={`flex mt-4 space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                {liveLink && (
                    <a 
                        href={liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-sm font-semibold flex items-center"
                    >
                        {t('projects.live_demo')}
                        <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0" />
                    </a>
                )}
                {github && (
                    <a 
                        href={github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 border-2 border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition duration-300 text-sm font-semibold flex items-center"
                    >
                        <GitBranch className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                        {t('projects.github_code')}
                    </a>
                )}
            </div>
        </motion.div>
    );
};


// 4. مكون سكشن الإحصائيات (StatsSection) - يتم نقله هنا أو استيراده
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
        <section className="py-20 bg-gray-900 dark:bg-gray-900">
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
                            className="p-6 bg-gray-800 rounded-xl shadow-lg transform transition duration-300 hover:shadow-blue-500/20"
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

// ----------------------------------------------------
// المكون الرئيسي للصفحة (ExperiencePage)
// ----------------------------------------------------

const ExperiencePage = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar'; 

    const projects = [
        {
            title: t('projects.ecommerce.title'),
            descriptionKey: 'projects.ecommerce.desc',
            github: 'https://github.com/amirsalama2002/my-laravel-app-ecommerce',
            liveLink: null,
        },
        {
            title: t('Application e-commerce (Laravel)'),
            descriptionKey: 'projects.ecommerce.desc',
            github: 'https://github.com/amirsalama2002/ecommerce.git',
            liveLink: null,
        },
        {
            title: t('projects.devdocs.title'),
            descriptionKey: 'projects.devdocs.desc',
            github: null, 
            liveLink: 'https://devdocs-language.netlify.app',
        },
        {
            title: t('projects.nidaa.title'),
            descriptionKey: 'projects.nidaa.desc',
            github: null,
            liveLink: 'https://nidaa-el-samma.netlify.app',
        },
        {
            title: t('projects.spandex.title'),
            descriptionKey: 'projects.spandex.desc',
            github: null,
            liveLink: 'https://spandex.netlify.app',
        },
        {
            title: t('projects.amirsalama.title'),
            descriptionKey: 'projects.amirsalama.desc',
            github: null,
            liveLink: 'https://amirsalama.netlify.app',
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-20"
        >
            {/* عنوان الصفحة - ثابت */}
            <div className="h-[40vh] flex flex-col justify-center items-center bg-gray-900 text-white text-center">
  <h1 className="text-6xl font-extrabold text-blue-400 mb-4">
    {t('nav.services')}
  </h1>
  <p className="text-xl text-gray-400 max-w-2xl">
    {t('exp.subtitle')}
  </p>
</div>

            
            {/* 1. الإنجازات بالأرقام (Stats Section) */}
            <StatsSection isRTL={isRTL} />

            {/* 2. الخبرة العملية (Timeline) */}
            <ProfessionalExperience isRTL={isRTL} />

            {/* 3. المشاريع (Project Grid) */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-8 max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">{t('projects.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} isRTL={isRTL} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default ExperiencePage;
