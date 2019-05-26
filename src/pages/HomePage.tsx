import React from "react";

import Layout from "./Layout";
import MercedesBenz from "../components/mercedezBenz/MercedesBenz";

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Layout>
        <h1>Home Page EZ-Auto</h1>
        <MercedesBenz />
      </Layout>
    </React.Fragment>
  );
};

export default HomePage;
