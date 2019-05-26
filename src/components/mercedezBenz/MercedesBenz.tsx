import React from "react";
import { connect } from "react-redux";
import { Spinner, Table } from "react-bootstrap";

import { filterMercedesData } from "../../services/filter.service";

const MercedesBenz: React.FC = (props: any) => {
  const { mercedesBenzData } = props;
  const finalData = filterMercedesData(mercedesBenzData);

  if (!finalData.length) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Mercedes Benz</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Model</th>
            <th>Year</th>
            <th>Mileage</th>
            <th>Exterior Color</th>
            <th>Interior Color</th>
            <th>VIN Number</th>
            <th>Sales Price</th>
            <th>Dealer Name</th>
            <th>Dealer Distance</th>
            <th>Image</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  mercedesBenzData: state.cars.mercedesBenz
});

export default connect(mapStateToProps)(MercedesBenz);
