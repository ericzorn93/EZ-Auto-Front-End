import React from 'react'
import { Spinner } from 'react-bootstrap';

const CustomSpinner = (props: any) => {
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
    )
}

export default CustomSpinner;
