import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Player from './pages/Player';
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/player" component={Player} />
      </Switch>
    </BrowserRouter>
  );
}
