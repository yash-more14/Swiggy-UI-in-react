import React from "react";
import FeatureProducts from "./FeatureProduct/FeatureProducts";
import Restaurant from "./Restaurants/Restaurant";
import SearchApp from "./Search/SearchApp"


const Home = () => {
  return (
    <div>
      <FeatureProducts />
      <Restaurant />
      <SearchApp />
    </div>
  );
};

export default Home;
