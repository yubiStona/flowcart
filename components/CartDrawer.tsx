"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCartDrawerOpen } from "@/store/slices/uiSlice";
import { removeFromCart, updateQuantity } from "@/store/slices/cartSlice";

export default function CartDrawer() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isCartDrawerOpen);
  const { items, totalQuantity, totalAmount } = useAppSelector(
    (state) => state.cart,
  );

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50"
        onClick={() => dispatch(setCartDrawerOpen(false))}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="font-headline-md text-headline-md">
            Your Cart ({totalQuantity})
          </h2>
          <button onClick={() => dispatch(setCartDrawerOpen(false))}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-center text-muted-text mt-8">
              Your cart is empty
            </p>
          ) : (
            <div className="space-y-4">
              {items.map((item: any) => (
                <div key={item.id} className="flex gap-4 border-b pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-body-md font-semibold">{item.name}</h3>
                    <p className="text-muted-text">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: Math.max(1, item.quantity - 1),
                            }),
                          )
                        }
                        className="w-8 h-8 border rounded hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: item.quantity + 1,
                            }),
                          )
                        }
                        className="w-8 h-8 border rounded hover:bg-gray-100"
                      >
                        +
                      </button>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="ml-auto text-red-500 hover:text-red-700"
                      >
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-6">
            <div className="flex justify-between mb-4">
              <span className="font-body-lg font-semibold">Total:</span>
              <span className="font-headline-md">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-primary text-on-primary py-4 rounded-lg font-button text-button hover:bg-opacity-90 transition-all">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
