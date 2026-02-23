"use client";
import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [
          ...prevItems,
          { name: product.name, price: product.price, quantity: 1 },
        ];
      }
    });
  };

  return (
    <>
      <section className="md:flex md:flex-row p-8">
        <pre>{JSON.stringify(cartItems, null, 2)}</pre>
        <ProductCard onAddToCart={addToCart} />
        <Cart cartItems={ cartItems} />
      </section>
    </>
  );
}
