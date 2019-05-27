import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CustomSpinner from "../customSpinner/CustomSpinner";

export class BMW extends Component<any> {
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
        <h1>BMW</h1>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  bmwData: state.cars.bmw
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BMW);
