import React, { useContext } from 'react';
import LanguageContext from './LanguageContext'; // Make sure to import your LanguageContext

function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return (
    <div>
      <h1>Current Language:</h1>
      <p>{language}</p>
    </div>
  );
}

export default DisplayLanguage;
