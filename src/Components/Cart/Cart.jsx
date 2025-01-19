import React from "react";
import { FcRating } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.items || []); // Provide a default empty array

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <img
            width="22%"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            alt="Empty cart"
          />
          <h1 className="font-semibold mt-8 text-zinc-500 text-xl">
            Your cart is empty
          </h1>
          <h6 className="text-zinc-500 mt-2 text-sm">
            You can go to the home page to view more restaurants
          </h6>
        </div>
      ) : (
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <h1>Cart Items: {cartItems.length}</h1>
          {cartItems.map(item => (
            <div key={item.id} className="flex flex-col items-center mt-4">
              <div className="information">
                <h1 className="foodName text-lg font-semibold text-zinc-700">
                  {item.name}
                </h1>
                <h1 className="rating text-md font-semibold text-zinc-700 flex gap-2 items-center">
                  <FcRating />
                  {item.rating}
                  <span className="time">{item.time}min</span>
                </h1>
              </div>
              <div className="image mt-2">
                <img src={item.img} alt={item.name} className="w-32 h-32 object-cover rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cart;
