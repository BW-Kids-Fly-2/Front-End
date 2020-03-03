import React from 'react';
import Forms from './React-I-components/ParentSignUp';
import MainParentSignIn from './React-I-components/MainParentSignIn';
import Homepage from './React-I-components/Homepage';
import SignUpForms from './React-I-components/KFCSignUp';
import Kfcsignin from './React-I-components/KFClogin';
import './App.css';
import { Route, Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Homepage />
      <Route path="/parent-registration" component={Forms} />

      <Route path="/parent-signin" component={MainParentSignIn} />
      <Route path="/kfc-register" component={SignUpForms} />
      <Route path="/kfc-signin" component={Kfcsignin} />
    </div>
    </Router>
  );
}

export default App;
