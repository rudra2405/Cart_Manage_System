import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Checkout({ cart, setCart }) {
  // const { cart, setCart } = useOutletContext();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Order placed successfully! Total paid ${totalPrice} rupees`);
    navigate("/"); // redirect to home after checkout
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.offerPrice * item.qty,
    0
  );

  return (
    <div className="container p-2 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Customer Form */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Customer Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={customer.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={customer.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={customer.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="address"
            placeholder="Address"
            value={customer.address}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Cart Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Image</th>
                <th className="border p-2">Product</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Total</th>
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

                  <td className="border p-2">{item.qty}</td>
                  <td className="border p-2">₹{item.offerPrice * item.qty}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" className="border p-2 text-right font-bold">
                  Grand Total
                </td>
                <td className="border p-2 font-bold">₹{totalPrice}</td>
              </tr>
            </tbody>
          </table>
        )}
        <div className="mt-5 text-right">
          <Link
            to="/"
            className="bg-yellow-500 text-white px-4 py-2 ms-3 rounded hover:bg-yellow-600 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
