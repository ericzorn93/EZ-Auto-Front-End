import React from "react";

import Layout from "./Layout";
import MercedesBenz from "../components/mercedezBenz/MercedesBenz";

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Layout>
        <MercedesBenz />
      </Layout>
    </React.Fragment>
  );
};

export default HomePage;
