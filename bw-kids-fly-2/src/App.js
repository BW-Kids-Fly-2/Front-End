import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import ButtonLogin from "./React-II-Components/ButtonLogin";
import ButtonRegister from "./React-II-Components/ButtonRegister";
import ParentProfile from "./React-II-Components/ParentProfile";
import AssistantProfile from "./React-II-Components/AssistantProfile";
import AddTrip from "./React-II-Components/AddTrip";
import PrivateRoute from './React-II-Components/Authorization/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        BW-Kids-Fly-2
      </header>
      <AddTrip/>
      <Switch>
        <Route exact path="/authorization-register" component={ButtonRegister}/>
        <Route exact path="/authorization-login" component={ButtonLogin}/>
      <PrivateRoute exact path="/parent" component={ParentProfile}/>
      <PrivateRoute exact path="/assistant" component={AssistantProfile}/>
      <PrivateRoute exact path="/add-trip" component={AddTrip}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
