export function WhyChooseUsSection() {
  const { t } = useTranslation();

  const items = [
    { icon: "🏆", title: t("why.experience", "10+ Years Experience") },
    { icon: "📁", title: t("why.projects", "1200+ Projects") },
    { icon: "☎️", title: t("why.support", "24/7 Support") },
    { icon: "🌱", title: t("why.eco", "Eco-Friendly") },
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="p-6"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}