import React from "react";

import Layout from "./Layout";
import MercedesBenz from "../components/mercedezBenz/MercedesBenz";
import BMW from "../components/bmw/BMW";

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Layout>
        <MercedesBenz />
        <BMW />
      </Layout>
    </React.Fragment>
  );
};

export default HomePage;
