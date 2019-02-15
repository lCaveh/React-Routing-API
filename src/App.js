import React, { Component } from 'react';
import './App.css';
import '../node_modules/uikit/dist/css/uikit.css';
// import '../node_modules/uikit/dist/js/uikit.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import MainArticle from "./components/MainArticle";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/MainArticle" component={MainArticle} />
            <Route component={Error} />
          </Switch>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
