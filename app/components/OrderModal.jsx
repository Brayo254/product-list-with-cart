import React from "react";
import Image from "next/image";
import Button from "./Button";

const Modal = ({ modalOpen, cartItems, startNewOrder }) => {
  const grandTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      {modalOpen && (
        // Overlay — covers entire screen with dark transparent background
        <div className="fixed inset-0 bg-rose900/70 flex items-center justify-center z-50">
          <div className="bg-rose50 rounded-xl p-8 w-[500px] max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <h2 className="text-rose900 text-3xl font-bold mb-2">
              Order Confirmed
            </h2>
            <p className="text-rose500 mb-6">We hope you enjoy your food!</p>

            {/* Order items list */}
            <div className="bg-rose100 rounded-lg p-4 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between py-3 border-b border-rose300 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.image}
                      height={50}
                      width={50}
                      alt={item.name}
                      className="rounded-md"
                    />
                    <div>
                      <p className="text-rose900 font-semibold">{item.name}</p>
                      <div className="flex gap-3 mt-1">
                        <span className="text-red font-bold">
                          {item.quantity}x
                        </span>
                        <span className="text-rose500">
                          @ ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-rose900 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}

              {/* Order Total */}
              <div className="flex justify-between items-center mt-4 pt-2">
                <p className="text-rose900">Order Total</p>
                <p className="text-rose900 text-2xl font-bold">
                  ${grandTotal.toFixed(2)}
                </p>
              </div>
            </div>

           
            <Button
              showIcon={false}
              onClick={startNewOrder}
              text="Start New Order"
              className="w-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
