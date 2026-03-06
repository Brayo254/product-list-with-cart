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
        <div className="md:w-[400px] md:h-[300px] flex justify-between emptyCart md:p-4 md:flex md:flex-col">
          <p className="text-xl font-bold">Your Cart (0)</p>
          <p className="text-xl font-bold">Your added items appear here</p>
        </div>
      ) : (
        <>
          <section className="bg-rose300 rounded-lg  md:h-[400px] md:w-[400px] md:flex md:justify-center md:flex-col md:items-center">
            <p className="font-bold">Your cart ({totalItems})</p>
            {cartItems.map((item) => (
              <div
                key={item.name}
                className="flex flex-row mb-1.5 w-full bg-green h-[50px] justify-center items-center"
              >
                <p className="text-bg  mr-2">{item.name}</p>
                <p className="mr-2">{item.quantity}</p> @
                <p className="mr-2">${item.price.toFixed(2)}</p>
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
