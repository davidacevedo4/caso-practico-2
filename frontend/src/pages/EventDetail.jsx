import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function EventDetail() {
  const { id } = useParams();
  const { t } = useTranslation();

  return (
    <main className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">
        {t('event_detail_title')} #{id}
      </h2>
      <p className="mb-4">{t('event_detail_description')}</p>

      {/* Aquí podrías mostrar más datos si los tuvieras */}
      <div className="bg-white shadow p-4 rounded">
        <p>{t('event_id_label')}: {id}</p>
        <p>{t('event_sample_info')}</p>
      </div>
    </main>
  );
}
