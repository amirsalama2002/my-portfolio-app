import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircle, Shield, Clock, Leaf } from "lucide-react";

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-400" />,
      title: t("meroabout.professional", "Professional Team"),
      description: t(
        "meroabout.professional_desc",
        "Our trained cleaning specialists ensure every corner is spotless."
      ),
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: t("meroabout.safe", "Safe & Reliable"),
      description: t(
        "meroabout.safe_desc",
        "We use eco-friendly products that are safe for families and pets."
      ),
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: t("meroabout.fast", "Efficient & Timely"),
      description: t(
        "meroabout.fast_desc",
        "Our team completes tasks on time without compromising quality."
      ),
    },
    {
      icon: <Leaf className="w-8 h-8 text-blue-400" />,
      title: t("meroabout.eco", "Eco-Friendly"),
      description: t(
        "meroabout.eco_desc",
        "We care for the environment with sustainable cleaning solutions."
      ),
    },
  ];

  return (
    <section className="py-24 bg-gray-800 text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center text-blue-400 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {t("meroabout.we", "Why Choose Top H Cleaning")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-blue-500/40 transition transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
