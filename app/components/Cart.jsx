import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <>
      {cartItems.length === 0 ? (
        <section className="md:w-[400px] md:h-[300px] emptyCart md:p-4 md:flex md:flex-col ">
          <div>
            <p>Your cart items are {cartItems.length}</p>
          </div>
          <div>
            <p>Your added items will appear here.{cartItems.price} </p>
          </div>
        </section>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.name} className="flex flex-col">
                <span>{item.name}</span>
                <span>{item.quantity}x @ ${item.price.toFixed(2)} </span>
                <span>${(item.quantity * item.price.toFixed(2))} </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className="text-xl text-red font-bold">
        Your cart ({cartItems.length})
      </p>
    </>
  );
};

export default Cart;
