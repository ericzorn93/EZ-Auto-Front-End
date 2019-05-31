import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CustomSpinner from "../customSpinner/CustomSpinner";
import { fetchBmw } from "../../services/api.service";

export class BMW extends Component<any> {
  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    const { bmwData } = this.props;

    if (!bmwData) {
      return <CustomSpinner />;
    }

    return (
      <div>
        <h1 style={{ color: "red" }}>BMW</h1>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  bmwData: state.cars.bmw
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      dispatchGetBMWModels: fetchBmw
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BMW);
