import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          access_key: "427a63d8-28bd-422e-a814-7323aa64496a",
        }),
      }).then((r) => r.json());

      if (res.success) {
        toast.success(t("contact.success_message") || "Message sent successfully 🚀");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else throw new Error();
    } catch {
      toast.error(t("contact.error_message") || "Something went wrong ❌");
    }

    setLoading(false);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-5xl font-extrabold mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          {t("nav.contact")}
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl">
          {/* Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <Info icon={<Mail />} title={t("contact.info.email")} value="hamirsalama@gmail.com" />
            <Info icon={<Phone />} title={t("contact.info.phone")} value={t("contact.info.mopile")} />
            <Info icon={<MapPin />} title={t("contact.info.location")} value={t("contact.info.city")} />
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="lg:col-span-2 space-y-6"
            dir={isRTL ? "rtl" : "ltr"}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Input name="name" value={formData.name} onChange={handleChange} placeholder={t("contact.form.name")} />
              <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder={t("contact.form.email")} />
            </div>

            <Input name="subject" value={formData.subject} onChange={handleChange} placeholder={t("contact.form.subject")} />

            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact.form.message")}
              className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 py-3 text-lg font-semibold shadow-lg disabled:opacity-50"
            >
              {loading ? t("contact.sending") : <><Send size={18} /> {t("contact.form.button")}</>}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      required
      className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
      {...props}
    />
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">{icon}</div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-gray-300">{value}</p>
      </div>
    </div>
  );
}