import React from "react";
import { connect } from "react-redux";
import { Table, Container } from "react-bootstrap";

import CustomSpinner from "../customSpinner/CustomSpinner";

const Audi = (props: any) => {
  const { audiData } = props;

  /** Methods */
  /** END Methods */

  if (!audiData || audiData.length <= 0) {
    return <CustomSpinner />;
  }

  const { cars: audiCars } = audiData;
  const cpoAudis = audiCars.filter((car: any) => car.cpo === true);

  return (
    <Container>
      <h1>Audi</h1>
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
          {cpoAudis.map((car: any) => (
            <tr key={car.id}>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.mileage}</td>
              <td>{car.exteriorColor.marketingName}</td>
              <td>{car.interiorColor.marketingName}</td>
              <td>{car.vin}</td>
              <td>${car.askingPrice}</td>
              <td>{car.dealer.id}</td>
              <td>
                {car.dealer.city}, {car.dealer.state}
              </td>
              <td>
                <img
                  src={car.profileImage.imageUrl}
                  alt={car.vin}
                  style={{ width: 200 }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  audiData: state.cars.audi
});

export default connect(mapStateToProps)(Audi);
