import React from "react";

import Layout from "./Layout";
import MercedesBenz from "../components/mercedezBenz/MercedesBenz";
import BMW from "../components/bmw/BMW";
import Audi from "../components/audi/Audi";

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Layout>
        <MercedesBenz />
        <BMW />
        <Audi />
      </Layout>
    </React.Fragment>
  );
};

export default HomePage;
