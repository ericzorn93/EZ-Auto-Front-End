import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import logo from "./logo.svg";
import "./App.css";
import { addAllCarsAction } from "./store/actions/allCars.actions";
import { addPrimayApiDataAction } from "./store/actions/primary.api.actions";

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

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
