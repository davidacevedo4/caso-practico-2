import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex space-x-4">
          <Link to="/" className="text-lg font-semibold hover:text-blue-600">
            {t('home')}
          </Link>
          <Link to="/events" className="text-lg hover:text-blue-600">
            {t('events')}
          </Link>
          <Link to="/locations" className="text-lg hover:text-blue-600">
            {t('locations')}
          </Link>
          <Link to="/contacts" className="text-lg hover:text-blue-600">
            {t('contacts')}
          </Link>
         <Link to="/help" className="text-lg hover:text-blue-600">
  {t('help')}
</Link>


        </nav>
        <div className="space-x-2">
          <button onClick={() => changeLanguage('es')}>Español</button>
          <button onClick={() => changeLanguage('en')}>English</button>
        </div>
      </div>
    </header>
  );
}
