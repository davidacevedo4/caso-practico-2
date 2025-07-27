import React from 'react';
import ListCard from '../components/ListCard';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const mockLocations = [
  { id: 1, title: 'Aula 101', subtitle: 'Edificio A' },
  { id: 2, title: 'Auditorio', subtitle: 'Edificio Central' },
  { id: 3, title: 'Sala 3', subtitle: 'Edificio B' },
];

export default function LocationsList() {
  const nav = useNavigate();
  const { t } = useTranslation();

  return (
    <main className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">{t('locations')}</h2>
      <p className="mb-4">{t('locations_description')}</p>

      {mockLocations.map(loc => (
        <ListCard
          key={loc.id}
          title={loc.title}
          subtitle={loc.subtitle}
          onView={() => nav(`/locations/${loc.id}`)}
          onEdit={() => nav(`/locations/${loc.id}/edit`)}
          viewLabel={t('view')}         
          editLabel={t('edit')}         
        />
      ))}
    </main>
  );
}
