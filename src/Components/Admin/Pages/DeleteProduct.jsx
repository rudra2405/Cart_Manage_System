import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function DeleteProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const deleteData = async () => {
      if (window.confirm("are you sure want to delete?")) {
        try {
          await axios.delete(`http://localhost:5001/Products/${id}`);
          Swal.fire({
            title: "Good job!",
            text: "Your data successfully deleted!",
            icon: "success",
          });
          navigate("/admin/manage-product");
        } catch (error) {
          console.error("Error deleting product:", error);
          navigate("/admin/manage-product");
        }
      } else {
        navigate("/admin/manage-product");
      }
    };
    deleteData();
  }, [id, navigate]);
}
