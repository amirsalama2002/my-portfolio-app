import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const companyInfo = [
  {
    title: "About Top H Cleaning",
    description: "Top H Cleaning is a leading professional cleaning company providing high-quality services for homes, offices, and commercial spaces. We use eco-friendly solutions and modern techniques to ensure every space is spotless and hygienic.",
  },
  {
    title: "Our Mission",
    description: "To deliver exceptional cleaning services that exceed client expectations while promoting a cleaner, healthier, and sustainable environment.",
  },
  {
    title: "Our Vision",
    description: "To be recognized as the most trusted and innovative cleaning company, setting global standards in quality, reliability, and customer satisfaction.",
  },
  {
    title: "Our Values",
    description: "Professionalism, Excellence, Reliability, Eco-Friendliness, Customer Satisfaction.",
  },
];

export default function AboutCompanySection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center text-blue-400 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t("about.company_title", "About Top H Cleaning")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {companyInfo.map((info, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-blue-500/40 transition transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {t(`about.company_info_${idx}_title`, info.title)}
              </h3>
              <p className="text-gray-300 leading-relaxed">{t(`about.company_info_${idx}_desc`, info.description)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
