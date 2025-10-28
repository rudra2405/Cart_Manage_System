import React, { useState, useEffect } from "react";
import Slider from "./Pages/Slider";
// import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Content({ addToCart, searchTerm }) {
  // const { addToCart, searchTerm } = useOutletContext();

  const [products, setProducts] = useState([]);

  const sliderImages = [
    "https://www.shutterstock.com/image-vector/clothes-bags-high-heels-shopping-260nw-1539636698.jpg",
    "https://www.shutterstock.com/image-illustration/cosmetics-shopping-basket-on-receipt-600nw-2249888671.jpg",
    "https://www.shutterstock.com/image-vector/3d-shopping-weekend-sale-half-600nw-2450115901.jpg",
    "https://www.shutterstock.com/image-photo/asian-girl-sitting-inside-shopping-260nw-2450267279.jpg",
  ];

  useEffect(() => {
    // Fetch products from your json-server
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/Products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="p-4">
        <Slider className="p-4" images={sliderImages}></Slider>
      </div>
      <div className="container p-4 mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6">All Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No products found</p>
        )}
      </div>
    </>
  );
}
