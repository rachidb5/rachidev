import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Pages/Main';
import Tecnologias from '../Pages/Tecnologias';
import Sobre from '../Pages/Sobre';
import Projetos from '../Pages/Projetos';
import Contato from '../Pages/Contato';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Main } />
      <Route exact path="/tecnologias" component={ Tecnologias } />
      <Route exact path="/sobre" component={ Sobre } />
      <Route exact path="/projetos" component={ Projetos } />
      <Route exact path="/contato" component={ Contato } />
    </Switch>
  );
}

export default Routes;