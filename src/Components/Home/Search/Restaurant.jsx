import { useState } from "react";

const RestaurantSearch = (props) => {
  const [search, setSearch] = useState("");
  const ratingHandler = ()=>{
    props.rating()
  }
  const handleSearch = () => {
    props.search(search);
  };
  return (
    <div className="bg-[#fff] px-48 py-5 w-full">
      <h1 className="text-2xl py-3 font-semibold">
        Restaurants with online food delivery in Pune
      </h1>
      <div
        className=" flex justify-between px-6 items-center
      "
      >
        <div className=" flex w-full gap-5">
          <input
            value={search}
            onChange={(e) => {
              handleSearch();
              setSearch(e.target.value);
            }}
            className="  border-2 pl-3 text-md w-[45vw] py-1 outline-none px-6 rounded-2xl"
            placeholder="Search For Restaurant and Food"
            type="search"
          />
          <button
            onClick={handleSearch}
            className=" border-2 text-md px-4 rounded-2xl"
          >
            Search
          </button>
        </div>
        <button
        onClick={ratingHandler}
         className=" rounded-2xl w-36 text-md py-2 mr-20 border-2">
          Rating 4.0+
        </button>
      </div>
    </div>
  );
};
export default RestaurantSearch;
