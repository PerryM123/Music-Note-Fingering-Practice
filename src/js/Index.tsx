import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
// components (pages??)
import SplashPage from './pages/SplashPage';
import NotesPage from './pages/NotesPage';
import SettingsPage from './pages/SettingsPage';
import StatsPage from './pages/StatsPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path={`${process.env.ROOT_URL}/`} component={SplashPage}/>
      <Route path={`${process.env.ROOT_URL}/music-notes/`} component={NotesPage}/>
      <Route path={`${process.env.ROOT_URL}/settings/`} component={SettingsPage}/>
      <Route path={`${process.env.ROOT_URL}/stats/`} component={StatsPage}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
