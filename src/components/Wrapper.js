import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import French from '../lang/fr.json';
import Arabic from '../lang/ar.json';
import English from '../lang/en.json';
import Spanish from '../lang/es.json';

export const Context = React.createContext();
const local = navigator.language;

let lang;

switch (local) {
  case 'en':
  case 'en-US':
    lang = English;
    break;
  case 'fr':
    lang = French;
    break;
  case 'ar':
    lang = Arabic;
    break;
  case 'es':
    lang = Spanish;
    break;

  default:
    lang = English;
    break;
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);
  function selectLanguage(e) {
      const newLocale = e.target.value;
      setLocale(newLocale);
      switch (newLocale) {
        case 'en':
        case 'en-US':
          setMessages(English);
          break;
        case 'fr':
          setMessages(French);
          break;
        case 'ar':
          setMessages(Arabic);
          break;
        case 'es':
          setMessages(Spanish);
          break;

        default:
          setMessages(English);
          break;
      }
  }

  return (
      <Context.Provider value = {{locale, selectLanguage}}>
          <IntlProvider messages={messages} locale={locale}>
              {props.children}
          </IntlProvider>
      </Context.Provider>
  );
}

export default Wrapper;
