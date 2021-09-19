import React from 'react'
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </Router>
  );
}
export default App;
