import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function WomenProducts({ addToCart }) {
  // const { addToCart } = useOutletContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your json-server
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/Products");
        // Filter only Women's Items
        const womensProducts = response.data.filter(
          (product) => product.category === "Women's Items"
        );
        setProducts(womensProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="container p-4 mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6">Women's Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded shadow flex flex-col"
            >
              <img
                src={product.productImage}
                alt={product.productName}
                className="h-48 w-full object-cover mb-4 rounded"
              />
              <h3 className="font-bold text-lg">{product.productName}</h3>
              <p className="text-sm text-gray-500">
                {product.productDescription}
              </p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-red-600 font-bold">
                  ₹{product.offerPrice}
                </span>
                <span className="line-through text-gray-400">
                  ₹{product.oldPrice}
                </span>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition"
              >
                Add to Cart
              </button>
              <Link
                to={`/products/${product.id}`}
                className="mt-2 text-blue-600 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
