'use client';

import React from 'react';
import Link from 'next/link';

const TermsOfUse: React.FC = () => {
  return (
      <div className="bg-black text-white min-h-screen px-6 py-10 flex flex-col items-center">
        <div className="max-w-3xl w-full space-y-10">
          <header className="text-center">
            <h1 className="text-4xl font-bold mb-2">ARctic – Terms of Use</h1>
            <p className="text-sm text-gray-400">Effective Date: January 1, 2025</p>
          </header>

          {/* Sections */}
          {[
            {
              title: '1. 📷 Camera Access',
              content: (
                  <>
                    <p className="mb-4">
                      ARctic requires access to your device’s <strong>camera</strong> to enable augmented reality functionality:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>Used to detect visual markers and display AR content.</li>
                      <li>We do <strong>not</strong> record, store, or transmit any camera data.</li>
                      <li>Your camera feed stays local to your device and browser only.</li>
                    </ul>
                  </>
              ),
            },
            {
              title: '2. 🔒 Privacy & Data',
              content: (
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>No personal data is collected or stored.</li>
                    <li>We do not access your location, contacts, or files.</li>
                    <li>No third-party analytics or advertising is used.</li>
                  </ul>
              ),
            },
            {
              title: '3. ✅ User Consent',
              content: (
                  <>
                    <p className="mb-4">By using ARctic, you agree to:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>Allow access to your device’s camera.</li>
                      <li>Use the app responsibly in a safe, distraction-free environment.</li>
                    </ul>
                    <p className="mt-4 text-gray-400">
                      If you do not agree with these terms, please do not use ARctic.
                    </p>
                  </>
              ),
            },
            {
              title: '4. ⚠️ Disclaimer',
              content: (
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>ARctic is provided “as-is” for demo and educational use.</li>
                    <li>We are not liable for device issues, performance, or user misuse.</li>
                    <li>For best results, use in a well-lit, open environment.</li>
                  </ul>
              ),
            },
            {
              title: '5. 📩 Contact',
              content: (
                  <p className="text-gray-300">
                    For support or questions, email us at{' '}
                    <a
                        href="mailto:your@email.com"
                        className="text-blue-400 underline hover:text-blue-300 transition"
                    >
                      nashemail@email.com
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
                ⬅ Back to Home
              </button>
            </Link>
          </div>

          <footer className="text-center text-gray-500 text-xs pt-10 border-t border-white/10">
            &copy; 2025 ARctic Project. All rights reserved.
          </footer>
        </div>
      </div>
  );
};

export default TermsOfUse;
