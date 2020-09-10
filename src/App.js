import React from "react";
import Homepage from "./Homepage/Homepage";
import classes from "./App.module.css";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className={classes.PageBody}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/video/watch/:videoId" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
