import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductDetails({ addToCart }) {
  const { id } = useParams();
  // const { addToCart } = useOutletContext();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/Products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  const handleAddToCart = () => {
    addToCart({ ...product, qty: quantity });
  };

  return (
    <div className="container p-3 mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.productImage}
          alt={product.productName}
          className="w-50 h-50 object-cover mx-auto block rounded"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">{product.productName}</h2>
          <p className="text-gray-600 mb-4">{product.productDescription}</p>
          <div className="flex justify-center md:justify-start items-center gap-4 mb-6">
            <span className="text-2xl text-red-600 font-bold">
              ₹{product.offerPrice}
            </span>
            <span className="line-through text-gray-400">
              ₹{product.oldPrice}
            </span>
          </div>
          {/* Quantity selector */}
          <div className="flex justify-center md:justify-start items-center gap-3 mb-6">
            <label className="font-medium">Quantity:</label>
            <button
              onClick={() => setQuantity((qty) => Math.max(1, qty - 1))}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="px-3 py-1 border rounded w-10 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((qty) => qty + 1)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Add to Cart
          </button>
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
