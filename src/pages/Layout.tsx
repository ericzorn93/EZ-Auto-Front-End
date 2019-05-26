import React from "react";
import Navigation from "../components/navigation/Navigation";

const Layout = (props: any) => (
  <React.Fragment>
    <Navigation />
    {props.children}
  </React.Fragment>
);

export default Layout;
