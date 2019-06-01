import React from "react";
import { connect } from "react-redux";
import CustomSpinner from "../customSpinner/CustomSpinner";
import { Table, Container } from "react-bootstrap";

const BMW: React.FC = (props: any) => {
  const { bmwData } = props;

  if (!bmwData.length) {
    return <CustomSpinner />;
  }

  const { Inventory: bmwInventory } = bmwData[0];
  const filteredInventory = bmwInventory.filter(
    (car: any) => car.Type === "CPO"
  );
  console.log(filteredInventory);

  return (
    <Container>
      <h1>BMW</h1>
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
          {filteredInventory.map((car: any) => (
            <React.Fragment key={car.VIN}>
              <tr>
                <td>{car.Model}</td>
                <td>{car.Year}</td>
                <td>{car.Mileage}</td>
                <td>{car.ExteriorColorDescription}</td>
                <td>{car.InteriorColorDescription}</td>
                <td>{car.VIN}</td>
                <td>{car.InternetPrice}</td>
                <td>{car.DealerCode}</td>
                <td>{car.DealerName}</td>
                <td>
                  {car.PhotoUrl ? (
                    <img
                      src={car.PhotoUrl}
                      alt={car.Model}
                      style={{ width: 200 }}
                    />
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  bmwData: state.cars.bmw
});

export default connect(mapStateToProps)(BMW);
