import React, { useState, useMemo } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const isRTL = i18n.language === 'ar'

  const languages = useMemo(() => ([
    { code: 'en', label: t('lango.en'), flag: 'EN' },
    { code: 'ar', label: t('lango.ar'), flag: 'AR' },
    { code: 'fr', label: t('lango.fr'), flag: 'FR' },
    { code: 'de', label: t('lango.de'), flag: 'DE' },
    { code: 'ru', label: t('lango.ru'), flag: 'RU' },
    { code: 'pt', label: t('lango.pt'), flag: 'PT' },
    { code: 'hi', label: t('lango.hi'), flag: 'IN' },
    { code: 'cn', label: t('lango.cn'), flag: 'CN' },
    { code: 'es', label: t('lango.es'), flag: 'ES' },
    { code: 'it', label: t('lango.it'), flag: 'IT' },
  ]), [t])

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0]

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
    setLangOpen(false)
    setOpen(false)

    const lang = languages.find(l => l.code === lng)
    toast.success(`${t('toast.lang')}: ${lang?.label}`, {
      style: {
        background: '#0b1220',
        color: '#fff',
        border: '1px solid #2563eb',
        borderRadius: 14,
      },
      iconTheme: { primary: '#2563eb', secondary: '#fff' },
    })
  }

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/experience' },
    { name: t('nav.prodect'), path: '/prodect' },
    { name: t('nav.contact'), path: '/contact' },
  ]

  return (
    <>
      <Toaster position="top-center" />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 14 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <nav className="mx-auto max-w-7xl px-4">
          <div className="mt-3 rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-2xl">
            <div className="flex h-16 items-center justify-between px-4">
              {/* Logo */}
              <Link to="/" className="text-xl font-extrabold tracking-tight text-blue-400 hover:text-blue-500">
                {t('home.my_name')}
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-1 rounded-2xl bg-white/5 p-1">
                {navItems.map(item => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-2 text-sm font-medium transition ${
                        isActive
                          ? 'bg-blue-600 text-white shadow'
                          : 'text-slate-200 hover:bg-white/10 hover:text-white'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* Actions */}
              <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {/* Language */}
                <div className="relative hidden md:block">
                  <button
                    onClick={() => setLangOpen(v => !v)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white shadow hover:bg-white/20"
                  >
                    <Globe className="h-4 w-4 text-blue-400" />
                    {currentLang.flag}
                  </button>

                  <AnimatePresence>
                    {langOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur"
                      >
                        {languages.map(lng => (
                          <button
                            key={lng.code}
                            onClick={() => changeLanguage(lng.code)}
                            className={`flex w-full items-center gap-3 px-4 py-2 text-sm transition hover:bg-blue-600/50 ${
                              i18n.language === lng.code ? 'bg-blue-700/60 text-white' : 'text-slate-200'
                            }`}
                          >
                            <span className="text-base">{lng.flag}</span>
                            <span>{lng.label}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile */}
                <button
                  onClick={() => setOpen(v => !v)}
                  className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white"
                >
                  {open ? <X /> : <Menu />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden border-t border-white/10"
                >
                  <div className="flex flex-col gap-1 p-3">
                    {navItems.map(item => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `rounded-xl px-4 py-3 text-sm transition ${
                            isActive ? 'bg-blue-600 text-white' : 'text-slate-200 hover:bg-white/10'
                          } ${isRTL ? 'text-right' : 'text-left'}`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}

                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {languages.map(lng => (
                        <button
                          key={lng.code}
                          onClick={() => changeLanguage(lng.code)}
                          className={`rounded-xl px-3 py-2 text-sm ${
                            i18n.language === lng.code
                              ? 'bg-blue-700/70 text-white'
                              : 'bg-white/5 text-slate-200'
                          }`}
                        >
                          {lng.flag} {lng.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </motion.header>
    </>
  )
}
