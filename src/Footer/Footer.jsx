import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    // روابط التواصل الاجتماعي (من سيرتك الذاتية)
    const socialLinks = [
        { icon: Mail, href: 'mailto:hamirsalama@gmail.com', label: 'Email' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/amir-salama-7b3408289/', label: 'LinkedIn' },
        { icon: Github, href: 'https://github.com/amirsalama2002', label: 'GitHub' },
    ];

    // روابط التنقل السريعة (تستخدم نفس روابط الـ Navbar)
    const navItems = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.services'), path: '/experience' }, 
        { name: t('nav.contact'), path: '/contact' },
    ];

    return (
        <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-8 max-w-6xl">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
                    
                    {/* 1. شعار الموقع والوصف */}
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                        <h3 className="text-2xl font-extrabold text-blue-400 mb-2">
                            {t('home.my_name')}
                        </h3>
                        <p className="text-gray-400 text-sm">
                            {t('home.title')}
                        </p>
                    </div>

                    {/* 2. روابط سريعة */}
                    <div className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                        <h4 className="text-xl font-semibold text-white mb-3">{isRTL ? 'روابط سريعة' : 'Quick Links'}</h4>
                        <ul className="space-y-1">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link 
                                        to={item.path}
                                        className="text-gray-400 hover:text-blue-400 transition duration-200 text-sm"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. التواصل الاجتماعي */}
                    <div className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                        <h4 className="text-xl font-semibold text-white mb-3">{isRTL ? 'تواصل معي' : 'Connect'}</h4>
                        <div className={`flex space-x-4 ${isRTL ? 'justify-end space-x-reverse' : 'justify-start'}`}>
                            {socialLinks.map((link) => (
                                <a 
                                    key={link.label}
                                    href={link.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition duration-200 transform hover:scale-110"
                                    aria-label={link.label}
                                >
                                    <link.icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* حقوق النشر */}
                <div className="pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} {t('home.my_name')} | {isRTL ? 'جميع الحقوق محفوظة' : 'All rights reserved.'}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
