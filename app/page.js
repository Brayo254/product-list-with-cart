"use client";
import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import OrderModal from "./components/OrderModal";

const Page = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const confirmOrder = () => {
    setIsModalOpen(true);
  };
  const startNewOrder = () => {
    setIsModalOpen(false);
    setCartItems([]);
  };
  const increaseQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.name === item.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
    setCartItems(updatedCart);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.name !== item.name));
  };

  const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.name !== item.name));
    } else {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem,
      );
      setCartItems(updatedCart);
    }
  };

  const addToCart = (item) => {
    const foundItem = cartItems.find((cartItem) => cartItem.name === item.name);
    if (foundItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          name: item.name,
          price: item.price,
          quantity: 1,
          image: item.image.thumbnail,
        },
      ]);
    }
  };

  return (
    <section className="md:flex md:flex-row p-8">
      <ProductCard
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        addToCart={addToCart}
        cartItems={cartItems}
      />
      <Cart
        removeFromCart={removeFromCart}
        cartItems={cartItems}
        confirmOrder={confirmOrder}
      />
      <OrderModal
        modalOpen={isModalOpen}
        cartItems={cartItems}
        startNewOrder={startNewOrder}
      />
    </section>
  );
};

export default Page;
