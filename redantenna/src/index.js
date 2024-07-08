import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LanguageProvider } from './Components/languageChange/languageContext';

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <LanguageProvider><App /></LanguageProvider>
      
);

