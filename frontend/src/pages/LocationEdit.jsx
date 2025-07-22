import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function LocationEdit() {
  const { id } = useParams();
  const { t } = useTranslation();

  return (
    <main className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">
        {t('location_edit_title')} #{id}
      </h2>
      <p className="mb-4">{t('location_edit_description')}</p>

      <form className="bg-white shadow p-6 rounded space-y-4">
        <div>
          <label className="block font-semibold mb-1">{t('location_name')}</label>
          <input type="text" className="w-full border rounded p-2" placeholder={t('location_name_placeholder')} />
        </div>
        <div>
          <label className="block font-semibold mb-1">{t('location_address')}</label>
          <input type="text" className="w-full border rounded p-2" placeholder={t('location_address_placeholder')} />
        </div>
        <div className="text-right">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {t('save_changes')}
          </button>
        </div>
      </form>
    </main>
  );
}
