import React from "react";
import Button from "./Button";
import Image from "next/image";

const Cart = ({ cartItems, confirmOrder, removeFromCart }) => {
  const totalItems = cartItems.reduce((total, cartItems) => {
    return total + cartItems.quantity;
  }, 0);

  const grandTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="bg-rose400 flex-col items-center w-100 h-75 justify-between md:w-[400px] md:h-[300px] flex md:justify-between emptyCart md:p-4 md:flex md:flex-col">
          <p className="mt-2 text-xl font-bold">Your Cart (0)</p>
          <p className="mb-2 text-xl font-bold">Your added items appear here</p>
        </div>
      ) : (
        <>
          <section className="bg-rose100 w-100 flex flex-col rounded-lg h-auto md:w-[400px] md:flex md:flex-col">
            <p className="font-bold">Your cart ({totalItems})</p>
            {cartItems.map((item) => (
              <div
                key={item.name}
                className="flex space-y-3 h-auto  pr-2 flex-row mb-1.5 w-full justify-center items-center border border-rose900"
              >
                <div className="flex flex-row justify-center items-center ">
                  <p className="text-bg  mr-2">{item.name}</p>
                  <p className="mr-2">{item.quantity} @ </p>
                  <p className="mr-2">${item.price.toFixed(2)}</p>
                </div>
                <Image
                  className="ml-2"
                  src={item.image}
                  width={50}
                  height={50}
                  alt={item.name}
                />
                <button
                  className="cursor-pointer text-xl text-red font-bold ml-2"
                  onClick={() => removeFromCart(item)}
                >
                  X
                </button>
              </div>
            ))}
            {
              
              <Button
                showIcon={false}
                onClick={confirmOrder}
                text="Confirm Order"
                className="border border-rose900"
              />
            }
            <p className="font-bold">Order Total: ${grandTotal.toFixed(2)}</p>
          </section>
        </>
      )}
    </>
  );
};

export default Cart;
