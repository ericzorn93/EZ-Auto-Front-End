import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

import CustomSpinner from "../customSpinner/CustomSpinner";

const Lexus = (props: any) => {
  const { lexusData } = props;

  if (lexusData.length <= 0) {
    return <CustomSpinner />;
  }

  const {
    data: { lexusDocs }
  } = lexusData;
  console.log(lexusDocs);

  return (
    <Container>
      <h1>Lexus</h1>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  lexusData: state.cars.lexus
});

export default connect(mapStateToProps)(Lexus);
