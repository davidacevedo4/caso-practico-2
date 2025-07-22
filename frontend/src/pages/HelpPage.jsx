import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HelpPage() {
  const { t } = useTranslation();

  return (
    <main className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-4">{t('help_title')}</h2>
      <p className="mb-6">{t('help_description')}</p>

      <div className="aspect-w-16 aspect-h-9">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/M11i4fuoyZQ?si=GqUV02W0ehNTwuVX"
          title="Video explicativo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}
