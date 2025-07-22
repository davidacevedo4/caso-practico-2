import React from 'react';
import ListCard from '../components/ListCard';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // <--- Añadido

const mockContacts = [
  { id: 1, title: 'Juan Pérez', subtitle: 'juan@example.com' },
  { id: 2, title: 'Ana Gómez', subtitle: 'ana@example.com' },
  { id: 3, title: 'Carlos Ruiz', subtitle: 'carlos@example.com' },
];

export default function ContactsList() {
  const nav = useNavigate();
  const { t } = useTranslation(); // <--- Añadido

  return (
    <main className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">{t('contacts')}</h2>
      <p className="mb-4">{t('contacts_description')}</p>

      {mockContacts.map(ct => (
        <ListCard
          key={ct.id}
          title={ct.title}
          subtitle={ct.subtitle}
          onView={() => nav(`/contacts/${ct.id}`)}
          onEdit={() => nav(`/contacts/${ct.id}/edit`)}
        />
      ))}
    </main>
  );
}
