import React from "react";
import { FcRating } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../utilities/cartSlice";
const Card = ({ key , scale, product }) => {
  const dispatch = useDispatch()

  const sendtheItem =(item) =>{
    dispatch(addItem(item));
    console.log('Clickedd', product);
  }

  return (
    <div onClick={()=>sendtheItem(product)} key={key} className={` ${scale ? 'hover:scale-[0.97]': null}  cursor-pointer`}>
      <div className=" imgcon w-[280px] overflow-hidden h-[180px] relative ">
        <img
          className="rounded-2xl h-full  w-full absolute object-cover object-center "
          src={product.img}
          alt=""
        />
        <h1 className=" z-10 rounded-2xl uppercase py-1 w-full text-white absolute bottom-0 px-2 pt-2 text-2xl font-extrabold">
          {product.imgText}
        </h1>
      </div>
      <div className="details capitalize py-1 px-3">
        <h1 className="foodName text-lg font-semibold text-zinc-700">
          {product.name}
        </h1>
        <h1 className="rating text-md font-semibold text-zinc-700 flex gap-2 items-center">
          {" "}
          <FcRating className="" />
          {product.rating}
          <span className="time">{product.time}min</span>
        </h1>
        <h1 className="restoName text-md text-zinc-600">{product.restoName}</h1>
        <h1 className="place text-md text-zinc-600">{product.area}</h1>
      </div>
    </div>
  );
};

export default Card;
