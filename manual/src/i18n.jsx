// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa las traducciones
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
    },
    lng: 'es', // Establece el idioma inicial
    fallbackLng: 'en', // Idioma de respaldo
    interpolation: {
      escapeValue: false, // No escapar HTML
    },
  });

export default i18n;
