import { createContext, useCallback, useState } from 'react';

export const LanguageContext = createContext(null);

LanguageContext.displayName = 'LanguageContext';

const contextValues = {
  lang: 'en',
  list: ['en', 'ru'],
  changeLang: () => {
    console.log('lang changed');
  },
};

const useContextConfig = (config) => {
  const [lang, setLang] = useState('en');
  const [list, setList] = useState(['en', 'ru']);

  // const newStep = config.nextStep;

  const changeLang = useCallback(() => {
    if (lang === 'en') setLang('ru');
    else setLang('en');
  }, [lang]);

  return {
    lang,
    list,
    changeLang,
    // nextStep: newStep,
  };
};

export const LanguageProvider = (props) => {
  return <LanguageContext.Provider value={useContextConfig()} {...props} />;
};
