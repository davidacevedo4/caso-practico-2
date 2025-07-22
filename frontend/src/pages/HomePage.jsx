import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main className="container mx-auto py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">{t('welcome')}</h1>
      <p className="text-lg text-gray-700">{t('home_description')}</p>
    </main>
  );
}
