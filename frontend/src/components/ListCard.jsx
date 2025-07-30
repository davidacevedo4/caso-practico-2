import React from 'react';
import { useTranslation } from 'react-i18next';
import { EyeIcon, PencilIcon } from '@heroicons/react/24/solid';

export default function ListCard({ title, subtitle, onView, onEdit }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onView}
          className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring"
        >
          <EyeIcon className="h-5 w-5" aria-hidden="true" />
          <span>{t('view')}</span>
        </button>
        <button
          onClick={onEdit}
          className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring"
        >
          <PencilIcon className="h-5 w-5" aria-hidden="true" />
          <span>{t('edit')}</span>
        </button>
      </div>
    </div>
  );
}

