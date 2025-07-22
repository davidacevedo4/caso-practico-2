import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ListCard({ title, subtitle, onView, onEdit }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white shadow rounded p-4 mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      <div className="space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onView}
        >
          {t('view')}
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={onEdit}
        >
          {t('edit')}
        </button>
      </div>
    </div>
  );
}
