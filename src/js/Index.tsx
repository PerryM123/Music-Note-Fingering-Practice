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
      <Route exact path='/' component={SplashPage}/>
      <Route path='/music-notes/' component={NotesPage}/>
      <Route path='/settings/' component={SettingsPage}/>
      <Route path='/stats/' component={StatsPage}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
