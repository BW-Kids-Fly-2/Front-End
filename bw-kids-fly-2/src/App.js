import React from 'react';
import Forms from './React-I-components/ParentSignUp';
import MainParentSignIn from './React-I-components/MainParentSignIn';
import Homepage from './React-I-components/Homepage';
import SignUpForms from './React-I-components/KFCSignUp';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ParentProfile from "./React-II-Components/ParentProfile";
import AddTrip from "./React-II-Components/AddTrip";
import AssistantProfile from "./React-II-Components/AssistantProfile";
import PrivateRoute from "./React-II-Components/Authorization/PrivateRoute";
import KFClogin from './React-I-components/KFClogin';

function App() {
  return (
    <Router>
    <div className="App">
    <Homepage />
      <Switch>
    {/* React-I routes */}
      <Route  path="/parent-registration" component={Forms} />
      <Route  path="/parent-signin" component={MainParentSignIn} />
      <Route  path="/kfc-register" component={SignUpForms} />
      <Route  path="/KFClogin" component={KFClogin} />

      <PrivateRoute exact path="/parent" component={ParentProfile}/>
      <PrivateRoute exact path="/assistant" component={AssistantProfile}/>
      <PrivateRoute exact path="/add-trip" component={AddTrip}/>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
