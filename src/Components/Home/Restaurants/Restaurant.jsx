import Card from "./Card";
import { object } from "../../../Objects";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
const Restaurant = () => {
  const refrance = useRef(null);
  const goLeft = () => {
    refrance.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };
  const goRight = () => {
    refrance.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };
  return (
    <div className=" bg-[#fff] px-48 py-6 w-full">
      <div className=" flex w-full justify-between items-center">
        <h1 className="text-2xl py-3 font-semibold">Top Restaurant In Pune</h1>
        <div className=" gap-2 flex">
          <button
            onClick={goLeft}
            className=" bg-zinc-200  hover:text-zinc-500 py-2 px-3  rounded-full"
          >
            <FaArrowLeft />{" "}
          </button>
          <button
            onClick={goRight}
            className="  bg-zinc-200 hover:text-zinc-500  py-2 px-3 rounded-full"
          >
            <FaArrowRight />{" "}
          </button>
        </div>
      </div>
      <div
        ref={refrance}
        className="w-full flex overflow-scroll  gap-8 border-b-2 border-zinc-100 pb-7"
      >
        {object.map((pro) => (
          <Card key={pro.id} scale={false} product={pro} />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
