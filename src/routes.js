import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Apresentacao from './pages/Apresentacao';
import Noticias from './pages/Noticias';
import ProjetoPedagogico from './pages/ProjetoPedagogico';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Apresentacao} />
    <Route path="/projeto-pedagogico" exact component={ProjetoPedagogico} />
    <Route path="/noticias" exact component={Noticias} />
  </Switch>
);

export default Routes;
