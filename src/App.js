import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './header/header';
import { LogInView } from './login_view';
import { InfoView } from './info_view';
import { JogsView } from './jogs_view/index';
import { EditJogForm } from './edit_jog_form';

function App() {
  const [isFilterOn, setFilterOn] = useState(false);

  return (
    <main>
      <BrowserRouter>
        <Header isFilterOn={isFilterOn} setFilterOn={setFilterOn}/>
        <Switch>
          <Route exact path='/' component={LogInView} />
          <Route exact path='/jogs' 
            render={ (props) => 
              <JogsView {...props} isFilterOn={isFilterOn} />
            } 
          />
          <Route exact path='/info' component={InfoView} />
          <Route exact path='/edit' component={EditJogForm} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
