import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
    const [menu, setMenu] = useState(false);
    const [language, setLanguage] = useState(false);

   
    const context = {
      menu,
      setMenu,
      language,
      setLanguage
    };
    return (
        <Context.Provider value={ context }>
          { children }
        </Context.Provider>
      );
}

export default Provider;