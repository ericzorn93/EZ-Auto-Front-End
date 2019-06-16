import React from "react";
import { connect } from "react-redux";
import { Table, Container } from "react-bootstrap";
import { bindActionCreators } from "redux";
import uuid from "uuid";

import { filterMercedesData } from "../../services/filter.service";
import { addMercdesBenzAction } from "../../store/actions/allCars.actions";
import CustomSpinner from "../customSpinner/CustomSpinner";

const MercedesBenz: React.FC = (props: any) => {
  const { mercedesBenzData } = props;
  const finalData: any[] = filterMercedesData(mercedesBenzData);

  if (!finalData.length || !finalData) {
    return <CustomSpinner />;
  }

  return (
    <Container>
      <h1>Mercedes Benz</h1>
      {/* <Button onClick={refreshMercedesData}>Refresh Mercedes Benz Data</Button>
      <br /> */}

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
            <React.Fragment key={uuid.v4()}>
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
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  mercedesBenzData: state.cars.mercedesBenz
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      dispatchGetMercedesBenz: addMercdesBenzAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MercedesBenz);
