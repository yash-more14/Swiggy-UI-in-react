import React from "react";

const Card = ({ products, key }) => {
  return (
          <img key={key}  src={products.src} className=" w-[165px] h-[175px] mb-2" />
  );
};

export default Card;
