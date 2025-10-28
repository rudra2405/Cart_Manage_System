import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

export default function Cart({ cart, setCart, removeCart }) {
  // const { cart, setCart, removeCart } = useOutletContext();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.offerPrice * item.qty,
    0
  );

  if (cart.length === 0)
    return <p className="text-center mt-10">Cart is empty</p>;

  return (
    <div className="container mx-auto py-10 overflow-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Image</th>
            <th className="border p-2">Product</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="border p-2">
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="w-16 h-16 object-cover mx-auto rounded"
                />
              </td>
              <td className="border p-2 font-bold">{item.productName}</td>
              <td className="border p-2">₹{item.offerPrice}</td>
              <td className="border p-2">
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() =>
                      setCart(
                        cart.map((i) =>
                          i.id === item.id
                            ? { ...i, qty: Math.max(1, i.qty - 1) }
                            : i
                        )
                      )
                    }
                    className="px-2 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() =>
                      setCart(
                        cart.map((i) =>
                          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
                        )
                      )
                    }
                    className="px-2 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="border p-2">₹{item.offerPrice * item.qty}</td>
              <td className="border p-2">
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to remove this item from cart?"
                      )
                    ) {
                      removeCart(item.id);
                    }
                  }}
                  className="text-red-500 px-2"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-right mt-6 text-xl font-bold">
        Grand Total: ₹{totalPrice}
      </h3>
      <div className="text-right mt-6">
        <Link
          to="/checkout"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Proceed to Checkout
        </Link>
        <Link
          to="/"
          className="bg-yellow-500 text-white px-4 py-2 ms-3 rounded hover:bg-yellow-600 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
