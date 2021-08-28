import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile";
import NotFound from "./components/pages/NotFound";
import Post from "./components/pages/Post";
const App = () => {
  return (
    <Router /* forceRefresh */>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/" component={Home} />
        <Route path="/post/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
export default App;