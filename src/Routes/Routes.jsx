import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Pages/Main';
import Tecnologias from '../Pages/Tecnologias';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Main } />
      <Route exact path="/tecnologias" component={ Tecnologias } />
    </Switch>
  );
}

export default Routes;