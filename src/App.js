import React from 'react'
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import PostPage from './Components/PostPage';
import LinksPage from './Components/LinksPage';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/post-page" component={PostPage} />
        <Route path="/post-links" component={LinksPage} />
      </Switch>
    </Router>
  );
}
export default App;
