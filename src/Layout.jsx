import React, { useState } from "react";
import Swal from "sweetalert2";

// import { Outlet } from "react-router-dom";
import Header from "./Components/Users/Header.jsx";
import Footer from "./Components/Users/Footer.jsx";

export default function Layout({ children }) {
  const [cart, setCart] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  // Function to add product to cart
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "info",
        title: "Item quantity updated",
        timer: 1000,
        showConfirmButton: false,
      });
    } else {
      setCart([...cart, { ...product, qty: 1 }]);

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Added to cart",
        timer: 1000,
        showConfirmButton: false,
      });
    }
  };

  const removeCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header cart={cart} setSearchTerm={setSearchTerm} />
      {/* <Outlet context={{ addToCart, cart, setCart, searchTerm, removeCart }} /> */}
      <main>
        {children &&
          React.cloneElement(children, {
            cart,
            setCart,
            addToCart,
            removeCart,
            searchTerm,
            setSearchTerm,
          })}
      </main>

      <Footer></Footer>
    </>
  );
}
