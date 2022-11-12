import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Header from "./components/Header";
import About from "./components/About";
import Amenites from "./components/Amenites";
import Rooms from "./components/Rooms";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Forms from "./components/Forms";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/amenites" exact>
            <Amenites />
          </Route>
          <Route path="/rooms" exact>
            <Rooms />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/forms" exact>
            <Forms />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
