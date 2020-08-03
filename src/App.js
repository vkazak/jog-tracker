import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './header/header';
import { LogInView } from './login_view';
import { InfoView } from './info_view';
import { JogsView } from './jogs_view/index';
import { EditJogForm } from './edit_jog_form';

function App() {
  return (
    <main>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LogInView} />
          <Route exact path='/jogs' component={JogsView} />
          <Route exact path='/info' component={InfoView} />
          <Route exact path='/edit' component={EditJogForm} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
