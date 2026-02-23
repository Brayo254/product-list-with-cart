import React from "react";
import Image from "next/image";
import Products from "../data/data.json";
import Button from "./Button";

const ProductCard = ({ onAddToCart }) => {
  return (
    <>
    
      <section className="md:w-[80%]  md:p-8 md:grid md:grid-cols-3 md:gap-4 ">
        {Products.map((product) => (
          <div
            key={product.name}
            className="border border-black flex justify-center items-center flex-col rounded-sm"
          >
            <div className="flex flex-col justify-center items-center">
              <Image
                src={product.image.desktop}
                height={200}
                width={200}
                alt="product-image"
              />
              <div className="-mt-4">
                <Button onClick={() => onAddToCart(product)} />
              </div>
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
        ))}
      </section>
    </>
  );
};

export default ProductCard;
