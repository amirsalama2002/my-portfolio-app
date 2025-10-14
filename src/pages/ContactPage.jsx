// src/pages/ContactPage.jsx

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
// أيقونات للتواصل
import { Mail, Phone, MapPin, Send } from 'lucide-react'; 

const ContactPage = () => {
  const { t } = useTranslation();
  
  // حالة النموذج لتجميع البيانات
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // دالة تحديث حالة النموذج
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // دالة الإرسال (هذا هو المكان الذي ستربط فيه بـ Laravel API)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(t('contact.submitting'));
    
    // ----------------------------------------------------------------
    // !!! نقطة التكامل مع Laravel !!!
    // هنا ستضع كود إرسال البيانات (formData) إلى واجهة Laravel API
    // ----------------------------------------------------------------
    
    console.log('Form Data Sent:', formData); 

    // محاكاة عملية الإرسال
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    
    setIsSubmitting(false);
    setSubmitMessage(t('contact.success_message'));
    setFormData({ name: '', email: '', subject: '', message: '' }); // تفريغ النموذج
  };
  
  // إعدادات Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="pt-20 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-600 dark:text-blue-400">
          {t('nav.contact')}
        </h2>
        
        <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
          
          {/* 1. معلومات الاتصال الجانبية */}
          <motion.div className="lg:col-span-1 space-y-8" variants={containerVariants}>
            <motion.div variants={itemVariants} className="flex items-start space-x-4 dark:space-x-reverse">
              <Mail className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold">{t('contact.info.email')}</h3>
                <p className="text-gray-600 dark:text-gray-300">hamirsalama@gmail.com</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start space-x-4 dark:space-x-reverse">
              <Phone className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold">{t('contact.info.phone')}</h3>
                <p className="text-gray-600 dark:text-gray-300">(+20) 01028975932</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start space-x-4 dark:space-x-reverse">
              <MapPin className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold">{t('contact.info.location')}</h3>
                <p className="text-gray-600 dark:text-gray-300">Cairo, Egypt</p>
              </div>
            </motion.div>
            
          </motion.div>
          
          {/* 2. نموذج الاتصال (Contact Form) */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition"
                />
              </div>
              
              <input
                type="text"
                name="subject"
                placeholder={t('contact.form.subject')}
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition"
              />
              
              <textarea
                name="message"
                placeholder={t('contact.form.message')}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition"
              ></textarea>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('contact.sending') : (
                    <>
                        <Send size={20} />
                        <span>{t('contact.form.button')}</span>
                    </>
                )}
              </button>

              {submitMessage && (
                <p className={`text-center font-semibold ${submitMessage.includes(t('contact.success_message')) ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </motion.div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;