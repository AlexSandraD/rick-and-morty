import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Router, RouteComponentProps } from "@reach/router";
import HomePage from "./components/HomePage"
import Characters from "./components/Characters"
import Episodes from "./components/Episodes"
import Locations from "./components/Locations"
import WatchList from "./components/WatchList"

import * as serviceWorker from "./serviceWorker";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;


ReactDOM.render(
  <Router>
    <App path="/">
      <RouterPage pageComponent={<HomePage />} path="/" />
      <RouterPage pageComponent={<Characters />} path="/characters" />
      <RouterPage pageComponent={<Episodes />} path="/episodes" />
      <RouterPage pageComponent={<Locations />} path="/locations" />
      <RouterPage pageComponent={<WatchList />} path="/favourites" />
    </App>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
