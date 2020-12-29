import React from 'react';
import './index.css';
import Homepage from './screens/Homepage.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Homepage} exact/> 
      </Switch>
    </main>
  );
}

export default App;
