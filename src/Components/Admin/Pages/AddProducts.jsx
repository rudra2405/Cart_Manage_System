import React, { useState, useEffect } from "react";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddProducts() {
  const [formData, setFormData] = useState({
    category: "",
    subcategory: "",
    productName: "",
    oldPrice: "",
    offerPrice: "",
    productImage: "",
    productQty: "",
    productDescription: "",
    addedDate: "",
  });

  const navigate = useNavigate();

  const [catagories, setCatagories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/categories");
        setCatagories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const selectedCat = catagories.find(
      (cat) => cat.name === formData.category
    );
    setSubcategories(selectedCat ? selectedCat.subcategories : []);
  }, [formData.category, catagories]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5001/Products",
        formData
      );
      console.log(response.data);
      Swal.fire({
        title: "Good job!",
        text: "Your data successfully added!",
        icon: "success",
      });
    } catch (error) {
      console.log("error occured", error);
    }
    setFormData({
      category: "",
      subcategory: "",
      productName: "",
      oldPrice: "",
      offerPrice: "",
      productImage: "",
      productQty: "",
      productDescription: "",
      addedDate: "",
    });

    navigate("/admin/manage-product");
  };

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
          <div className="p-6  bg-white shadow rounded">
            {/* Title */}
            <h2 className="text-xl font-bold mb-6">Add Products here</h2>

            {/* Form */}
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* Category */}
              <div>
                <select
                  className="border w-full rounded px-3 py-2"
                  value={formData.category}
                  name="category"
                  onChange={handleChange}
                  required
                >
                  <option value="">-select category-</option>
                  {catagories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subcategory */}
              <div>
                <label className="block font-medium mb-1">
                  Select SubCategory *
                </label>
                <select
                  className="border rounded px-3 py-2 w-full"
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleChange}
                  required
                >
                  <option value="">-select subcategory-</option>
                  {subcategories.map((sub) => (
                    <option key={sub.id} value={sub.name}>
                      {sub.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Product Name */}
              <div>
                <label className="block font-medium mb-1">Product Name *</label>
                <input
                  type="text"
                  name="productName"
                  placeholder="Enter product name"
                  className="border rounded px-3 py-2 w-full"
                  onChange={handleChange}
                  value={formData.productName}
                  required
                />
              </div>

              {/* Old Price */}
              <div>
                <label className="block font-medium mb-1">Old Price *</label>
                <input
                  type="number"
                  name="oldPrice"
                  placeholder="Enter old price"
                  className="border rounded px-3 py-2 w-full"
                  value={formData.oldPrice}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Offer Price */}
              <div>
                <label className="block font-medium mb-1">Offer Price *</label>
                <input
                  type="number"
                  name="offerPrice"
                  placeholder="Enter offer price"
                  className="border rounded px-3 py-2 w-full"
                  value={formData.offerPrice}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Product Image */}
              <div>
                <label className="block font-medium mb-1">
                  Product Image *
                </label>
                <input
                  type="text"
                  name="productImage"
                  placeholder="Image URL"
                  className="border rounded px-3 py-2 w-full"
                  value={formData.productImage}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Product QTY */}
              <div>
                <label className="block font-medium mb-1">Product QTY *</label>
                <input
                  type="number"
                  name="productQty"
                  placeholder="Enter product quantity"
                  className="border rounded px-3 py-2 w-full"
                  value={formData.productQty}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Product Description */}
              <div>
                <label className="block font-medium mb-1">
                  Product Descriptions *
                </label>
                <textarea
                  rows="3"
                  name="productDescription"
                  value={formData.productDescription}
                  placeholder="Enter product description"
                  className="border rounded px-3 py-2 w-full"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Added Date */}
              <div>
                <label className="block font-medium mb-1">Added Date</label>
                <input
                  type="date"
                  name="addedDate"
                  className="border rounded px-3 py-2 w-full"
                  value={formData.addedDate}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Add Products
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
