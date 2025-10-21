import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast'; // ✅ استيراد مكتبة Toast
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

  // تحديث حالة الحقول
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // دالة الإرسال الرئيسية
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData(event.target);
    formDataToSend.append("access_key", "427a63d8-28bd-422e-a814-7323aa64496a");

    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("✅ Success:", res);
        toast.success(t('contact.success_message') || 'تم الإرسال بنجاح 🎉');
        setFormData({ name: '', email: '', subject: '', message: '' }); // ← تفريغ النموذج
      } else {
        toast.error(t('contact.error_message') || 'حدث خطأ أثناء الإرسال 😞');
      }
    } catch (error) {
      console.error(error);
      toast.error('حدث خطأ في الاتصال بالشبكة ⚠️');
    }

    setIsSubmitting(false);
  };

  // إعدادات الأنيميشن
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="pt-2 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white">
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
          
          {/* 1. معلومات الاتصال */}
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
          
          {/* 2. نموذج الاتصال */}
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
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition"
                />
              </div>
              
              <input
                type="text"
                name="subject"
                placeholder={t('contact.form.subject')}
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition"
              />
              
              <textarea
                name="message"
                placeholder={t('contact.form.message')}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition"
              ></textarea>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex cursor-pointer items-center justify-center space-x-2 px-6 py-3 text-lg 
                font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('contact.sending') : (
                  <>
                    <Send size={20} />
                    <span>{t('contact.form.button')}</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
