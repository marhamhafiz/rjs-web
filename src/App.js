import React from 'react';
import logo from './compass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BarMenu from './BarMenu';
import Home from './components/Home';
import Love from './components/Love';
import Task from './components/Task';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <BarMenu />
        <Switch>
          <Route exact path="/">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Lets doin some code man. Just upgrade your code skill<br/>
                  tryin loving yourself ;)
                </p>
              </header>
            </div>
            <Home />
          </Route>
          <Route path="/love">
            <Love />
          </Route>
          <Route path="/task">
            <Task />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
