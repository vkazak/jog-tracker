import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './header/header';
import { LogInView } from './login_view';

function App() {
  return (
    <main>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LogInView} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
