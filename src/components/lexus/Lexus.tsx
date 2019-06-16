import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

const Lexus = (props: any) => {
  console.log(props);

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
