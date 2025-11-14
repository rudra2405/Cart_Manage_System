import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function PaymentSuccess() {
  const location = useLocation();
  const { cart = [], totalPrice = 0 } = location.state || {};

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600">
        Payment Successful 🎉
      </h1>
      <p className="mt-2 text-lg">Your order has been placed.</p>

      {/* Bill Box */}
      <div className="mt-6 bg-gray-100 p-4 rounded shadow w-full md:w-1/2 mx-auto print:p-0">
        <h2 className="text-xl font-semibold mb-3">Order Summary</h2>

        <p className="text-lg">
          <strong>Total Items:</strong> {cart.length}
        </p>

        <p className="text-lg">
          <strong>Total Quantity:</strong> {totalQty}
        </p>

        <p className="text-lg">
          <strong>Total Amount Paid:</strong> ₹{totalPrice}
        </p>

        {/* OPTIONAL – Print item-wise list in bill */}
        <div className="mt-4 text-left">
          <h3 className="font-bold mb-2">Items Purchased:</h3>
          {cart.map((item) => (
            <p key={item.id} className="text-sm border-b py-1">
              {item.productName} — Qty: {item.qty} — ₹
              {item.offerPrice * item.qty}
            </p>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Print Bill
        </button>

        <Link
          to="/"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
