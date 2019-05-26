import React from "react";
import Navigation from "../components/Navigation";

const Layout = (props: any) => (
  <React.Fragment>
    <Navigation />
    {props.children}
  </React.Fragment>
);

export default Layout;
