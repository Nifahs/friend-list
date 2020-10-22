import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import FriendProfile from './Components/FriendProfile/FriendProfile';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/friend/:id">
          <FriendProfile/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
