// src/pages/ContactPage.jsx

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Clock,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

const ContactPage = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [faqOpen, setFaqOpen] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(t("contact.submitting"));
    console.log("Form Data Sent:", formData);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitMessage(t("contact.success_message"));
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    console.log("Newsletter Email:", newsletterEmail);
    setNewsletterEmail("");
    alert("✅ Thank you for subscribing!");
  };

  const toggleFaq = (index) =>
    setFaqOpen(faqOpen === index ? null : index);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const faqs = [
    {
      q: "How long does it take to get a reply?",
      a: "Usually within 24 hours, depending on the message volume.",
    },
    {
      q: "Can I request a custom project?",
      a: "Yes, you can send details through the contact form.",
    },
    {
      q: "Do you work with international clients?",
      a: "Absolutely! I collaborate with clients worldwide.",
    },
  ];

  return (
    <div className="pt-20 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-600 dark:text-blue-400">
          {t("nav.contact")}
        </h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* ✅ معلومات التواصل */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-start space-x-4 dark:space-x-reverse"
            >
              <Mail className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold">{t("contact.info.email")}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  hamirsalama@gmail.com
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start space-x-4 dark:space-x-reverse"
            >
              <Phone className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold">{t("contact.info.phone")}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +971 50 321 4077
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start space-x-4 dark:space-x-reverse"
            >
              <MapPin className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold">
                  {t("contact.info.location")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Cairo, Egypt
                </p>
              </div>
            </motion.div>

            {/* 🕒 ساعات العمل */}
            <motion.div variants={itemVariants} className="flex space-x-4">
              <Clock className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold">{t("contact.info.workHous")}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sat - Thu: 9:00 AM - 8:00 PM
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Friday: Closed
                </p>
              </div>
            </motion.div>

            {/* 🌐 روابط السوشيال */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ✅ نموذج الاتصال */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder={t("contact.form.name")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("contact.form.email")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder={t("contact.form.subject")}
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition"
              />

              <textarea
                name="message"
                placeholder={t("contact.form.message")}
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
                {isSubmitting ? (
                  t("contact.sending")
                ) : (
                  <>
                    <Send size={20} />
                    <span>{t("contact.form.button")}</span>
                  </>
                )}
              </button>

              {submitMessage && (
                <p
                  className={`text-center font-semibold ${
                    submitMessage.includes(t("contact.success_message"))
                      ? "text-green-600 dark:text-green-400"
                      : "text-yellow-600 dark:text-yellow-400"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>

        {/* 🗺️ خريطة تفاعلية */}
        <motion.div
          className="mt-16 rounded-xl overflow-hidden shadow-2xl"
          variants={itemVariants}
        >
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.558974845087!2d31.235711315114836!3d30.044419381884312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841b8a514aaab%3A0x61cbdfd69e46d7!2sCairo!5e0!3m2!1sen!2seg!4v1612345678901!5m2!1sen!2seg"
            width="100%"
            height="400"
            loading="lazy"
            className="border-0 w-full"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* 📨 نموذج الاشتراك */}
        <motion.div
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 text-center"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            Subscribe to Newsletter
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Stay updated with new projects and articles.
          </p>
          <form
            onSubmit={handleNewsletter}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              placeholder="Your Email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="p-3 w-full sm:w-1/2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>

        {/* ❓ قسم الأسئلة الشائعة */}
        <motion.div
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8"
          variants={itemVariants}
        >
          <h3 className="text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400 text-center">
            FAQ
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 dark:border-gray-600 rounded-lg p-4"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800 dark:text-white"
                >
                  {faq.q}
                  <ChevronDown
                    className={`transition-transform ${
                      faqOpen === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === index && (
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* 💬 زر واتساب */}
        <a
          href="https://wa.me/201028975932"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition transform hover:scale-110"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
