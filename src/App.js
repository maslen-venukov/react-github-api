import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/Main';
import Card from './pages/Card';

const App = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/card/:username/:reponame" component={Card} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;