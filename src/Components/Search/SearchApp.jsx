import Card from "../Home/Restaurants/Card";
import RestaurantSearch from "../Home/Search/Restaurant";
import { object } from "../../Objects";
import { useState } from "react";

const SearchApp = () => {
  const [searchlist, setSearchlist] = useState([]);

  const search = (searched) => {
    let list = object.filter((product) =>
      product.name.toLowerCase().includes(searched.toLowerCase())
    );
    setSearchlist(list);
  };

  const rating = () => {
    let ratingList = object.filter((product) => product.rating > 4.5);
    setSearchlist(ratingList);
  };
  return (
    <>
      <RestaurantSearch search={search} rating={rating} />
      <div className="bg-[#fff] px-40 py-5 w-full flex gap-5 flex-wrap">
        {searchlist.map((pr) => {
          return <Card key={pr.id} scale={true} product={pr} />;
        })}
      </div>
    </>
  );
};

export default SearchApp;
