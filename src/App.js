import logo from './logo.svg';
import './App.scss';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
    const [user , setUser] =useState({
        isSignIn : false,
        name : '',
        Fname : '',
        Lname : '',
        email : '',
        photo : '',
        password : '',
    });
  return (
    <userContext.Provider value={[user , setUser]}>
        <Router>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <PrivateRoute path="/home">
                  <Home />
              </PrivateRoute>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="*">
                  <NotFound />
              </Route>
          </Switch>
        </Router>
    </userContext.Provider>
  );
}

export default App;
