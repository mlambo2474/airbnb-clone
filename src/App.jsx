import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import SearchPage from "./components/searchPage/SearchPage";
import "./App.css"

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>

        <Route>
          <Modal />
        </Route>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
