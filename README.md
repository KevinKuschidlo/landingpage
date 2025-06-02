# Moderne Landingpage für digitale Tools

Eine moderne, responsive Landingpage für Studenten, die lokalen Unternehmen kostenlose digitale Tools anbieten.

## Features

✨ **Moderne UI/UX**: Sauberes, professionelles Design mit Tailwind CSS  
📱 **Responsive Design**: Optimiert für Desktop, Tablet und Mobile  
💌 **Kontaktformular**: Integriert mit Formsubmit für einfache E-Mail-Verarbeitung  
🚀 **Performance**: Built with Next.js für optimale Ladezeiten  
🎨 **Anpassbar**: Einfach zu personalisieren und zu erweitern

## Sektionen

### 1. Hero Section
- Große, ansprechende Überschrift mit Ihrem Namen
- Kurzbeschreibung Ihrer Dienstleistung  
- Call-to-Action Button mit mailto-Link

### 2. Vorteile (Features)
- Drei Spalten mit Icons und Beschreibungen:
  - 💡 Individuelle Lösungen
  - ⚡ Schnell umgesetzt
  - 🤝 Kostenlos & unverbindlich

### 3. Referenzen
- Beispielprojekte als Platzhalter
- Erweiterbar für echte Screenshots und Beschreibungen

### 4. Kontakt
- Vollständiges Kontaktformular
- Integration mit Formsubmit
- Erfolgsnachricht nach dem Absenden

### 5. Footer
- Links zu Impressum und Datenschutz
- Copyright-Hinweis

## Personalisierung

### 1. Name und E-Mail ändern
Ersetzen Sie folgende Platzhalter in `src/app/page.tsx`:
- `[Ihr Name]` - Ihr vollständiger Name
- `ihre-email@example.com` - Ihre E-Mail-Adresse

### 2. Formsubmit konfigurieren
1. Besuchen Sie https://formsubmit.co/
2. Ersetzen Sie `ihre-email@example.com` im Formular mit Ihrer echten E-Mail
3. (Optional) Konfigurieren Sie eine Weiterleitungsseite nach dem Absenden

### 3. Projekte hinzufügen
Ersetzen Sie die Beispielprojekte in der Referenzen-Sektion mit echten Projekten.

## Installation und Start

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten  
npm run dev
```

Die Seite ist dann unter `http://localhost:3000` verfügbar.

## Deployment auf Vercel

1. Repository auf GitHub pushen
2. Bei Vercel anmelden: https://vercel.com
3. "New Project" klicken
4. GitHub Repository verknüpfen
5. Deploy klicken

Vercel erkennt automatisch das Next.js Projekt und konfiguriert alles.

## Technologien

- **Next.js 15** - React Framework
- **React 19** - UI Library
- **TypeScript** - Typsicherheit
- **Tailwind CSS 4** - Styling
- **Formsubmit** - Formular-Handling

## Struktur

```
landing-page/
├── src/
│   └── app/
│       ├── page.tsx          # Hauptseite
│       ├── layout.tsx        # Layout
│       └── globals.css       # Globale Styles
├── public/                   # Statische Dateien
├── package.json             # Abhängigkeiten
└── README.md               # Diese Datei
```

## Support

Bei Fragen oder Problemen können Sie gerne Kontakt aufnehmen!
