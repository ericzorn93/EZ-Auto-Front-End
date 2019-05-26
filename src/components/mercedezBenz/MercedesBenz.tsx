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
        <br />
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  return (
    <div className="container">
      <br />

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
            <th>Dealer ID</th>
            <th>Dealer City</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {finalData.map((car: any) => (
            <>
              <tr>
                <td>{car.modelName}</td>
                <td>{car.year}</td>
                <td>{car.mileage}</td>
                <td>{car.exteriorColorDesc}</td>
                <td>{car.interiorColorDesc}</td>
                <td>{car.vin}</td>
                <td>{car.msrp}</td>
                <td>{car.dealer.id}</td>
                <td>{car.dealer.city}</td>
                <td>
                  {car.images.length ? (
                    <img
                      src={car.images[0]}
                      alt={car.modelName}
                      style={{ width: 200 }}
                    />
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  mercedesBenzData: state.cars.mercedesBenz
});

export default connect(mapStateToProps)(MercedesBenz);
