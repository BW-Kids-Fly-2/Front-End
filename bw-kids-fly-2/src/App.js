import React from 'react';
import './App.css';

import ParentProfile from "./React-II-Components/ParentProfile";
import AssistantProfile from "./React-II-Components/AssistantProfile";
import AddTrip from "./React-II-Components/AddTrip";
import PrivateRoute from './React-II-Components/Authorization/PrivateRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        BW-Kids-Fly-2
      </header>
      <PrivateRoute exact path="/parent" component={ParentProfile}/>
      <PrivateRoute exact path="/assistant" component={AssistantProfile}/>
      <PrivateRoute exact path="/add-trip" component={AddTrip}/>
    </div>
  );
}

export default App;
