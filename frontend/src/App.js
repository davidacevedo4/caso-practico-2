import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import EventsList from './pages/EventsList';
import EventDetail from './pages/EventDetail';
import EventEdit from './pages/EventEdit';

import LocationsList from './pages/LocationsList';
import LocationDetail from './pages/LocationDetail';
import LocationEdit from './pages/LocationEdit';

import ContactsList from './pages/ContactsList';
import ContactDetail from './pages/ContactDetail';
import ContactEdit from './pages/ContactEdit';

import Help from './pages/HelpPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Página de inicio */}
        <Route path="/" element={<HomePage />} />

        {/* Eventos */}
        <Route path="/events" element={<EventsList />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/events/:id/edit" element={<EventEdit />} />

        {/* Ubicaciones */}
        <Route path="/locations" element={<LocationsList />} />
        <Route path="/locations/:id" element={<LocationDetail />} />
        <Route path="/locations/:id/edit" element={<LocationEdit />} />

        {/* Contactos */}
        <Route path="/contacts" element={<ContactsList />} />
        <Route path="/contacts/:id" element={<ContactDetail />} />
        <Route path="/contacts/:id/edit" element={<ContactEdit />} />

        {/* Ayuda */}
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
