'use client';

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ArrowLeft, Settings } from 'lucide-react';

const TermsOfUse: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ru'>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('arctic-language');
    if (savedLang === 'ru' || savedLang === 'en') {
      setLanguage(savedLang);
    }
  }, []);


  const t = {
    en: {
      contact: "Contact us",
      terms: "Terms of Use",
      title: "ARctic – Terms of Use",
      backToHome: "⬅ Back to Home",
      camera: "1. 📷 Camera Access",
      cameraDetails: [
        "ARctic requires access to your device’s camera to enable augmented reality functionality:",
        "Used to detect visual markers and display AR content.",
        "We do not record, store, or transmit any camera data.",
        "Your camera feed stays local to your device and browser only."
      ],
      privacy: "2. 🔒 Privacy & Data",
      privacyDetails: [
        "No personal data is collected or stored.",
        "We do not access your location, contacts, or files.",
        "No third-party analytics or advertising is used."
      ],
      consent: "3. ✅ User Consent",
      consentIntro: "By using ARctic, you agree to:",
      consentDetails: [
        "Allow access to your device’s camera.",
        "Use the app responsibly in a safe, distraction-free environment."
      ],
      consentFooter: "If you do not agree with these terms, please do not use ARctic.",
      disclaimer: "4. ⚠️ Disclaimer",
      disclaimerDetails: [
        "ARctic is provided “as-is” for demo and educational use.",
        "We are not liable for device issues, performance, or user misuse.",
        "For best results, use in a well-lit, open environment."
      ],
      contactSection: "5. 📩 Contact",
      contactText: "For support or questions, email us at",
    },
    ru: {
      contact: "Связаться с нами",
      terms: "Условия использования",
      title: "ARctic – Условия использования",
      backToHome: "⬅ Назад на главную",
      camera: "1. 📷 Доступ к камере",
      cameraDetails: [
        "ARctic требует доступ к камере вашего устройства для работы дополненной реальности:",
        "Используется для распознавания маркеров и отображения AR-контента.",
        "Мы не записываем, не храним и не передаём данные с камеры.",
        "Камера работает только локально в вашем браузере."
      ],
      privacy: "2. 🔒 Конфиденциальность и данные",
      privacyDetails: [
        "Личные данные не собираются и не сохраняются.",
        "Мы не получаем доступ к вашему местоположению, контактам или файлам.",
        "Отсутствует сторонняя аналитика или реклама."
      ],
      consent: "3. ✅ Согласие пользователя",
      consentIntro: "Используя ARctic, вы соглашаетесь:",
      consentDetails: [
        "Разрешить доступ к камере вашего устройства.",
        "Использовать приложение ответственно и в безопасной обстановке."
      ],
      consentFooter: "Если вы не согласны с этими условиями, не используйте ARctic.",
      disclaimer: "4. ⚠️ Отказ от ответственности",
      disclaimerDetails: [
        "ARctic предоставляется как есть для демонстрационных и образовательных целей.",
        "Мы не несем ответственности за проблемы с устройством или неправильное использование.",
        "Для лучшей работы используйте в хорошо освещённом и безопасном месте."
      ],
      contactSection: "5. 📩 Контакты",
      contactText: "По вопросам и поддержке напишите нам на",
    },
  }[language];


  return (
      <div className="bg-black text-white min-h-screen flex flex-col relative overflow-hidden">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <p className="text-2xl font-bold">ARctic</p>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <Menu className="w-6 h-6 text-white" />
          </button>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/settings">
              <Settings className="text-white w-6 h-6" />
            </Link>
          </div>
        </header>

        {/* Hamburger Menu */}
        <div
            className={`fixed inset-0 bg-black text-white z-50 transition-transform duration-300 ease-in-out ${
                menuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <button onClick={() => setMenuOpen(false)}>
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="logo" width={30} height={30} />
              <p className="text-xl font-bold">ARctic</p>
            </div>
            <div className="w-6" />
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col items-center px-6 py-10 gap-5">

            <Link href="/" onClick={() => setMenuOpen(false)} className="w-full max-w-xs">
              <div className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 rounded-lg text-center transition-all">
                Home
              </div>
            </Link>

            {/*<Link href="/settings" onClick={() => setMenuOpen(false)} className="w-full max-w-xs">*/}
            {/*  <div className="bg-white text-black text-lg font-semibold py-3 rounded-lg text-center hover:bg-gray-100 transition-all">*/}
            {/*    Settings*/}
            {/*  </div>*/}
            {/*</Link>*/}

            <Link href="/contact" onClick={() => setMenuOpen(false)} className="w-full max-w-xs">
              <div className="bg-white text-black text-lg font-semibold py-3 rounded-lg text-center hover:bg-gray-100 transition-all">
                {t.contact}
              </div>
            </Link>

            <Link href="/terms" onClick={() => setMenuOpen(false)} className="w-full max-w-xs">
              <div className="bg-white text-black text-lg font-semibold py-3 rounded-lg text-center hover:bg-gray-100 transition-all">
                {t.terms}
              </div>
            </Link>

          </nav>
        </div>

        {/* Main Content */}
        {/* Main Content */}
        <main className="flex-grow px-6 py-10 flex flex-col items-center">
          <div className="max-w-3xl w-full space-y-10">
            <header className="text-center">
              <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
            </header>

            {/* Sections */}
            {[
              {
                title: t.camera,
                content: (
                    <>
                      <p className="mb-4">{t.cameraDetails[0]}</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {t.cameraDetails.slice(1).map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </>
                ),
              },
              {
                title: t.privacy,
                content: (
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {t.privacyDetails.map((item, i) => (
                          <li key={i}>{item}</li>
                      ))}
                    </ul>
                ),
              },
              {
                title: t.consent,
                content: (
                    <>
                      <p className="mb-4">{t.consentIntro}</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {t.consentDetails.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <p className="mt-4 text-gray-400">{t.consentFooter}</p>
                    </>
                ),
              },
              {
                title: t.disclaimer,
                content: (
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {t.disclaimerDetails.map((item, i) => (
                          <li key={i}>{item}</li>
                      ))}
                    </ul>
                ),
              },
              {
                title: t.contactSection,
                content: (
                    <p className="text-gray-300">
                      {t.contactText}{' '}
                      <a
                          href="mailto:deepfakeprojectteam@gmail.com"
                          className="text-blue-400 underline hover:text-blue-300 transition"
                      >
                        deepfakeprojectteam@gmail.com
                      </a>
                    </p>
                ),
              },
            ].map(({ title, content }, index) => (
                <section
                    key={index}
                    className="bg-white/5 p-6 rounded-lg border border-white/10 shadow-inner space-y-4"
                >
                  <h2 className="text-xl font-semibold text-white">{title}</h2>
                  <div className="text-sm leading-relaxed">{content}</div>
                </section>
            ))}

            <div className="text-center">
              <Link href="/">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-base py-3 px-6 rounded-full transition-all duration-200">
                  {t.backToHome}
                </button>
              </Link>
            </div>

            <footer className="text-center text-gray-500 text-xs pt-10 border-t border-white/10">
              &copy; 2025 ARctic Project. All rights reserved.
            </footer>
          </div>
        </main>

      </div>
  );
};

export default TermsOfUse;
