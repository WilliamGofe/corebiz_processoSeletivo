import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import InsertEmail from "../pages/homepage/InsertEmail";
import ErrorPage from "../pages/ErrorPage";
import Shop from "../pages/shopPage/Shop";


function Router() {

  return (
    <BrowserRouter>
      <Switch>
 
         <Route exact path="/">
          <InsertEmail/>
        </Route>

        <Route exact path="/shopping">
          <Shop/>
        </Route>

        <Route>
          <ErrorPage/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;
