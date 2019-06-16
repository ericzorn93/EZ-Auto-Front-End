import React from "react";

import Layout from "./Layout";
import MercedesBenz from "../components/mercedezBenz/MercedesBenz";
import BMW from "../components/bmw/BMW";
import Audi from "../components/audi/Audi";
import Lexus from "../components/lexus/Lexus";

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Layout>
        <MercedesBenz />
        <BMW />
        <Audi />
        <Lexus />
      </Layout>
    </React.Fragment>
  );
};

export default HomePage;
