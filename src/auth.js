import React, { useState } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';

export default function Auth() {
  const [loggedIn, setLoggedIn] = useState(false);
  //{loggedIn ? <App /> : <Redirect to="/signin" />}
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route exact path='/'>
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}