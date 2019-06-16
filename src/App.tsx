import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { addAllCarsAction } from "./store/actions/allCars.actions";
import { addPrimayApiDataAction } from "./store/actions/primary.api.actions";

import HomePage from "./pages/HomePage";
import MercedesBenzPage from "./pages/MercedesBenzPage";
import BMWPage from "./pages/BMWPage";
import AudiPage from "./pages/AudiPage";

const App: React.FC = (props: any) => {
  // Dispatches the original API call to all primary API data
  useEffect(() => {
    props.dispatchPrimaryApiData();
  });

  // Dispatches the original API call to all cars
  useEffect(() => {
    props.dispatchAddAllCars();
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mercedes-benz" component={MercedesBenzPage} />
        <Route exact path="/bmw" component={BMWPage} />
        <Route exact path="/audi" component={AudiPage} />
      </Switch>
    </Router>
  );
};

// Redux Actions
const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      dispatchAddAllCars: addAllCarsAction,
      dispatchPrimaryApiData: addPrimayApiDataAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
