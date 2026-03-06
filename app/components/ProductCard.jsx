import React from "react";
import Image from "next/image";
import Products from "../data/data.json";
import Button from "./Button";

const ProductCard = ({
  addToCart,
  cartItems,
  decreaseQuantity,
  increaseQuantity,
}) => {
  return (
    <>
      <section className="md:w-[80%]  md:p-8 md:grid md:grid-cols-3 md:gap-4 ">
        {Products.map((product) => {
          const cartItem = cartItems.find((item) => item.name === product.name);
          return (
            <div
              key={product.name}
              className="border border-black w-[200px] h-[200px] md:p-1.5 flex justify-center items-center flex-col rounded-sm"
            >
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={product.image.desktop}
                  height={100}
                  width={100}
                  alt="product-image"
                />
                {cartItem ? (
                  <div className="flex flex-row p-5 justify-center items-center">
                    <button
                      onClick={() => decreaseQuantity(cartItem)}
                      className="cursor-pointer py-2 px-6 p-4 rounded-full bg-red text-xl"
                    >
                      -
                    </button>
                    <div className="text-xl p-2.5">{cartItem.quantity}</div>
                    <button
                      onClick={() => increaseQuantity(cartItem)}
                      className=" cursor-pointer py-2 px-6 p-4 rounded-full bg-red text-xl"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <div className="-mt-4">
                    <Button
                      showIcon={true}
                      text="Add to Cart"
                      onClick={() => addToCart(product)}
                    />
                  </div>
                )}
              </div>
              <div>
                <p>{product.category} </p>
              </div>
              <div>
                <p>{product.name} </p>
              </div>
              <div>
                <p>${product.price.toFixed(2)} </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductCard;
