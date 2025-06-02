'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formsubmit.co/kevin@example.com', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setFormStatus('sent');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Fehler beim Senden:', error);
      setFormStatus('idle');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 animate-fade-in-down duration-700 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="mb-8 animate-fade-in-up delay-100">
            <Image
              src="/profile.png"
              alt="Profilbild von Kevin"
              width={192}
              height={192}
              className="rounded-full shadow-xl border-4 border-sky-100 mx-auto hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 mb-8 transition-colors duration-500 animate-fade-in-down">
            Hi, ich bin{' '}
            <span className="text-sky-500 animate-wiggle inline-block">Kevin</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Ich helfe lokalen Unternehmen mit kleinen digitalen Tools – kostenlos, unkompliziert und persönlich.
          </p>
          <a
            href="mailto:kevin@example.com?subject=Anfrage%20für%20digitale%20Tools&body=Hallo,%0D%0A%0D%0AIch%20interessiere%20mich%20für%20Ihre%20kostenlosen%20digitalen%20Tools.%0D%0A%0D%0AMit%20freundlichen%20Grüßen"
            className="inline-block bg-sky-400 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-sky-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-200 animate-fade-in-up delay-300 btn-glow"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 animate-fade-in-up duration-700 delay-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16 animate-fade-in-down delay-200">
            Warum mit mir arbeiten?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md card-hover border border-slate-100 group hover:-translate-y-2 animate-fade-in-up delay-300">
              <div className="text-6xl mb-4 animate-bounce-slow group-hover:scale-110 transition-transform duration-300">💡</div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Individuelle Lösungen</h3>
              <p className="text-slate-600 max-w-xl">Jedes Tool wird speziell für Ihr Unternehmen und Ihre Bedürfnisse entwickelt – keine Standardlösungen von der Stange.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md card-hover border border-slate-100 group hover:-translate-y-2 animate-fade-in-up delay-400">
              <div className="text-6xl mb-4 animate-bounce-slow group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Schnell umgesetzt</h3>
              <p className="text-slate-600 max-w-xl">Von der Idee bis zur fertigen Lösung – ich arbeite effizient und liefere schnelle Ergebnisse ohne lange Wartezeiten.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md card-hover border border-slate-100 group hover:-translate-y-2 animate-fade-in-up delay-500">
              <div className="text-6xl mb-4 animate-bounce-slow group-hover:scale-110 transition-transform duration-300">🤝</div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Kostenlos & unverbindlich</h3>
              <p className="text-slate-600 max-w-xl">Als Student biete ich meine Dienste kostenlos an – ohne versteckte Kosten oder langfristige Verpflichtungen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Was ich anbiete Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 animate-fade-in-up duration-700 delay-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 mb-10 animate-fade-in-down delay-200">
            Was ich anbiete
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Ich entwickle für kleine Betriebe einfache, wartungsarme Mini-Tools, die sofort helfen – ohne Technikstress oder Pflegeaufwand.
          </p>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Gutschein-Generator */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl border border-sky-100 flex flex-col items-center text-center transition-all duration-300 animate-fade-in-up delay-300">
              <div className="text-5xl mb-4">🧾</div>
              <h3 className="font-semibold text-xl text-slate-800 mb-2">Gutschein-Generator</h3>
              <p className="text-slate-600">Erstellen Sie mit wenigen Klicks digitale Wertgutscheine zum Ausdrucken oder Versenden – ganz unkompliziert.</p>
            </div>
            {/* Vorbestellformular */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl border border-sky-100 flex flex-col items-center text-center transition-all duration-300 animate-fade-in-up delay-400">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="font-semibold text-xl text-slate-800 mb-2">Vorbestellformular</h3>
              <p className="text-slate-600">Kunden können bequem online vorbestellen, die Bestellung landet direkt per E-Mail bei Ihnen – kein Login oder System nötig.</p>
            </div>
            {/* PDF-Downloadseite */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl border border-sky-100 flex flex-col items-center text-center transition-all duration-300 animate-fade-in-up delay-500">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="font-semibold text-xl text-slate-800 mb-2">PDF-Downloadseite</h3>
              <p className="text-slate-600">Eine statische Seite für Tagesangebote, Preislisten oder Speisepläne – einfach als PDF zum Herunterladen bereitstellen.</p>
            </div>
          </div>
          {/* Freundlicher Hinweis als Karte */}
          <div className="mt-10 flex justify-center">
            <div className="bg-sky-50 border border-sky-100 rounded-xl p-6 shadow-md text-center max-w-xl animate-fade-in-up delay-600">
              <span className="text-sky-700 font-semibold text-lg block mb-2">Noch mehr Ideen?</span>
              <span className="text-slate-700">Sie haben eine andere digitale Idee oder einen besonderen Wunsch? Sprechen Sie mich gerne an – ich kann viele weitere individuelle Tools und Lösungen für Sie umsetzen!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 animate-fade-in-up duration-700 delay-400" id="kontakt">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-8 animate-fade-in-down delay-400">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-xl text-center text-slate-600 mb-12 animate-fade-in-up delay-500">
            Erzählen Sie mir von Ihrem Projekt. Ich melde mich schnell zurück!
          </p>
          <form action="https://formsubmit.co/kuschidlo.k@gmail.com" method="POST" className="space-y-6 animate-fade-in-up delay-600">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white text-slate-700 placeholder:text-slate-500 transition-all duration-300" placeholder="Ihr vollständiger Name" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Unternehmen</label>
              <input type="text" id="company" name="company" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white text-slate-700 placeholder:text-slate-500 transition-all duration-300" placeholder="Ihr Unternehmen (optional)" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-Mail *</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white text-slate-700 placeholder:text-slate-500 transition-all duration-300" placeholder="ihre.email@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Nachricht *</label>
              <textarea id="message" name="message" required rows={6} className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white text-slate-700 placeholder:text-slate-500 transition-all duration-300" placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Idee..." />
            </div>
            <button type="submit" className="w-full bg-sky-400 text-white py-4 px-6 rounded-lg font-semibold hover:bg-sky-500 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 btn-glow">
              Nachricht senden
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 animate-fade-in-up duration-700 delay-500">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-300">© Kevin 2025 – Made with ❤️ in Siegen</p>
            </div>
            <div className="flex space-x-6">
              <a href="/impressum" className="text-slate-300 hover:text-white transition-colors duration-200">Impressum</a>
              <a href="/datenschutz" className="text-slate-300 hover:text-white transition-colors duration-200">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Tailwind Custom Animations (in globals.css einfügen):
// .animate-fade-in-up { @apply opacity-0 translate-y-8; animation: fadeInUp 0.7s forwards; }
// .animate-fade-in-down { @apply opacity-0 -translate-y-8; animation: fadeInDown 0.7s forwards; }
// .animate-wiggle { animation: wiggle 1.2s infinite; }
// .animate-bounce-slow { animation: bounce 2s infinite; }
// .animate-pulse { animation: pulse 2s infinite; }
// @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
// @keyframes fadeInDown { to { opacity: 1; transform: translateY(0); } }
// @keyframes wiggle { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
// @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
