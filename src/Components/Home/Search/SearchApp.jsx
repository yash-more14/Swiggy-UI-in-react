import Card from "../Restaurants/Card";
import { object } from "../../../Objects";
import { useState } from "react";
import RestaurantSearch from "./Restaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../utilities/cartSlice";

const SearchApp = () => {
  const [searchlist, setSearchlist] = useState([]);

  const search = (searched) => {
    let list = object.filter((product) =>
      product.name.toLowerCase().includes(searched.toLowerCase())
    );
    setSearchlist(list);
  };
  const rating = () => {
    let ratingList = object.filter((product) => product.rating > 4.3);
    setSearchlist(ratingList);
  };

  return (
    <>
      <RestaurantSearch search={search} rating={rating} />
      <div className="bg-[#fff] px-40 py-5 w-full flex gap-5 flex-wrap">
        {searchlist.map((pr) => {
          return (
              <Card key={pr.id} scale={true} product={pr} />
          );
        })}
      </div>
    </>
  );
};

export default SearchApp;
