// src/App.jsx (تحديث كامل)
import "./index.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // <--- (1) استيراد الـ Router والـ Routes
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';     // <--- (2) استيراد الصفحات الجديدة
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage'; // سنقوم بإنشائها لاحقا
import ContactPage from './pages/ContactPage';       // سنقوم بإنشائها لاحقا
import Footer from './Footer/Footer';
import ConcatTestContactUs from "./pages/ConcatTestContactUs"

function App() {
  
  // ملاحظة: قمنا بإزالة useTranslation هنا لأنه لم يعد ضرورياً في هذا المكون

  return (
    // <Router> لتغليف التطبيق
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        
        {/* شريط التنقل (Navbar) يبقى في الخارج ليظهر في كل الصفحات */}
        <Navbar />
        
        <main className="pt-20">
          {/* (3) تحديد المسارات */}
          <Routes>
            
            {/* الصفحة الرئيسية */}
            <Route path="/" element={<HomePage />} />
            
            {/* صفحة عني */}
            <Route path="/about" element={<AboutPage />} />

            {/* المسارات الأخرى (سنضيفها لاحقًا) */}
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/amir" element={<ConcatTestContactUs />} />

          </Routes>
        </main>
         <Footer/>
      </div>
    </Router>
  );
}

export default App;