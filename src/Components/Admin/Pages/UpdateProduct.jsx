import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const [catagories, setCatagories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/Products/${id}`
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm("are you sure want to update data ?")) {
      try {
        await axios.put(`http://localhost:5001/Products/${id}`, formData);
        Swal.fire({
          title: "Good job!",
          text: "Your data successfully Updated!",
          icon: "success",
        });
        navigate("/admin/manage-product");
      } catch (error) {
        console.error("Error updating product:", error);
        navigate("/admin/manage-product");
      }
    } else {
      navigate("/admin/manage-product");
    }
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
            <h2 className="text-xl font-bold mb-6">Update Products here</h2>

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
                  <option>-select category-</option>
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
                  <option>-select subcategory-</option>
                  {subcategories.map((sub, id) => (
                    <option key={id} value={sub.name}>
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
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
