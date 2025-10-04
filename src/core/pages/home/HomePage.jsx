import React from 'react';
import { logEvent } from '../../services/log/logService';
import { useTranslation } from 'react-i18next';
import env from '../../../env';

function HomePage() {
    const { t, i18n } = useTranslation();

    const handleClick = () => {
        logEvent('INFO', 'button clicked');
    };

    console.log(env.apiUrl);

    return (
        <div>
            <div> {t('welcome')}</div>
            <button onClick={handleClick}>log event</button>
            <button onClick={() => i18n.changeLanguage('fr')}>FR</button>
            <button onClick={() => i18n.changeLanguage('en')}>EN</button>
            <p>{t('logout')}</p>
        </div>
    );
}

export default HomePage;
