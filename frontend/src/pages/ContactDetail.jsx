import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ContactDetail() {
  const { id } = useParams();
  const { t } = useTranslation();

  return (
    <main className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">
        {t('contact_detail_title')} #{id}
      </h2>
      <p className="mb-4">{t('contact_detail_description')}</p>

      <div className="bg-white shadow p-4 rounded">
        <p>{t('contact_id_label')}: {id}</p>
        <p>{t('contact_sample_info')}</p>
      </div>
    </main>
  );
}
