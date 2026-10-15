import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './translation/en.json';
import es from './translation/es.json';

i18n.use(initReactI18next).init({

    debug: true,
    fallbackLng: 'en',

    resources: {
        en: {translation: en},
        es: {translation: es}
    }
});

export default i18n;
