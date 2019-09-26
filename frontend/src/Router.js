import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import CharacterForm from './components/characters/CharacterForm';
import CharacterAll from './components/characters/CharacterAll';
import CharacterRandom from './components/characters/CharacterRandom';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/characters/create" component={CharacterForm} />
      <Route exact path="/characters" component={CharacterAll} />
      <Route exact path="/characters/random" component={CharacterRandom} />
    </Switch>
  </BrowserRouter>
);

export default Router;
