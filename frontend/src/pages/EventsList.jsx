import React from 'react';
import ListCard from '../components/ListCard';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const mockEvents = [
  { id: 1, title: 'Seminario de UX', subtitle: '10 de agosto, 10:00 AM' },
  { id: 2, title: 'Taller React', subtitle: '12 de agosto, 2:00 PM' },
  { id: 3, title: 'Charla sobre IA', subtitle: '15 de agosto, 11:00 AM' },
];

export default function EventsList() {
  const nav = useNavigate();
  const { t } = useTranslation();

  return (
    <main className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">{t('events')}</h2>
      <p className="mb-4">{t('events_description')}</p>

      {mockEvents.map(ev => (
        <ListCard
          key={ev.id}
          title={ev.title}
          subtitle={ev.subtitle}
          onView={() => nav(`/events/${ev.id}`)}
          onEdit={() => nav(`/events/${ev.id}/edit`)}
          viewLabel={t('view')}     
          editLabel={t('edit')}     
        />
      ))}
    </main>
  );
}


