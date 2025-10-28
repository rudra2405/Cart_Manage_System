import React, { useState, useEffect } from "react";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";
import { FaTrash, FaEdit } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ManageProducts() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/Products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // const handleDelete = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this product?")) {
  //     try {
  //       await axios.delete(`http://localhost:5001/Products/${id}`);
  //       setData(() => data.filter((item) => item.id !== id));
  //     } catch (error) {
  //       console.error("Error deleting product:", error);
  //     }
  //   }
  // };

  return (
    <>
      <AdminHeader></AdminHeader>
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="sticky top-[90px] h-[calc(100vh-90px)]">
          <AdminSidebar />
        </div>
        {/* Empty main area for now */}
        <main className="flex-1 overflow-auto bg-gray-100 p-6">
          <div className="p-6 bg-white shadow rounded">
            <h2 className="text-xl font-bold mb-6">Manage Products</h2>
            <table className="w-full table-auto overflow-x-auto">
              <thead>
                <tr className="">
                  <th className="border-b px-4 py-2">#ID</th>
                  <th className="border-b px-4 py-2">Product Name</th>
                  <th className="border-b px-4 py-2">Category</th>
                  <th className="border-b px-4 py-2">Subcategory</th>
                  <th className="border-b px-4 py-2">Old Price</th>
                  <th className="border-b px-4 py-2">Offer Price</th>
                  <th className="border-b px-4 py-2">Product Image</th>
                  <th className="border-b px-4 py-2">Qty</th>
                  <th className="border-b px-4 py-2">Product description</th>
                  <th className="border-b px-4 py-2">Added Date</th>
                  <th className="border-b px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.length == 0 ? (
                  <tr>
                    <td
                      colSpan="10"
                      className="border px-4 py-2 text-center text-gray-500"
                    >
                      No products found.
                    </td>
                  </tr>
                ) : (
                  data.map((item, index) => (
                    <tr key={item.id}>
                      <td className="border-b px-4 py-2">{index + 1}</td>
                      <td className="border-b px-4 py-2">{item.productName}</td>
                      <td className="border-b px-4 py-2">{item.category}</td>
                      <td className="border-b px-4 py-2">{item.subcategory}</td>
                      <td className="border-b px-4 py-2">{item.oldPrice}</td>
                      <td className="border-b px-4 py-2">{item.offerPrice}</td>
                      <td className="border-b px-4 py-2">
                        <img
                          src={item.productImage}
                          alt={item.productName}
                          className="w-16 h-16 object-cover"
                        />
                      </td>
                      <td className="border-b px-4 py-2">{item.productQty}</td>
                      <td className="border-b px-4 py-2">
                        {item.productDescription}
                      </td>
                      <td className="border-b px-4 py-2">{item.addedDate}</td>
                      <td className="border-b px-4 py-2 text-center">
                        <button
                          onClick={() => {
                            navigate(`/delete-product/${item.id}`);
                          }}
                          className="text-red-600 hover:text-red-800"
                        >
                          <FaTrash />
                        </button>
                        <button
                          onClick={() => {
                            navigate(`/update-product/${item.id}`);
                          }}
                          className="text-green-600 hover:text-green-800 ms-4"
                        >
                          <FaEdit />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}
