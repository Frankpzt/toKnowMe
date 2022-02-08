import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import HomePage from "../layouts/HomePage";
import MyCVPage from "../layouts/MyCVPage";
import AsWebDevPage from "../layouts/AsWebDevPage";
function Routes(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            element={<HomePage lan={props.lan} changeLan={props.changeLan} />}
          />
          <Route
            path="/MyCVPage"
            exact
            element={<MyCVPage lan={props.lan} changeLan={props.changeLan} />}
          />
          <Route
            path="/AsWebDevPage"
            exact
            element={
              <AsWebDevPage lan={props.lan} changeLan={props.changeLan} />
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
