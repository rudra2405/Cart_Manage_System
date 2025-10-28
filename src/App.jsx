import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Admin imports
import AdminLayout from "./AdminLayout";
import ManageProducts from "./Components/Admin/Pages/ManageProducts";
import AddProducts from "./Components/Admin/Pages/AddProducts";
import DeleteProduct from "./Components/Admin/Pages/DeleteProduct.jsx";
import UpdateProduct from "./Components/Admin/Pages/UpdateProduct.jsx";

// {User imports}
import Layout from "./Layout.jsx";
import MenProducts from "./Components/Users/Pages/MenProducts.jsx";
import WomenProducts from "./Components/Users/Pages/WomenProducts.jsx";
import KidsProducts from "./Components/Users/Pages/KidsProducts.jsx";
import Content from "./Components/Users/Content";
import ProductDetails from "./Components/Users/Pages/ProductDetails.jsx";
import Cart from "./Components/Users/Pages/Cart.jsx";
import Checkout from "./Components/Users/Pages/Checkout.jsx";

export default function App() {
  return (
    <>
      {/* Admin Routes */}
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminLayout></AdminLayout>} />
          <Route
            path="/admin/manage-product"
            element={<ManageProducts></ManageProducts>}
          />
          <Route
            path="/admin/add-products"
            element={<AddProducts></AddProducts>}
          />
          <Route path="/delete-product/:id" element={<DeleteProduct />} />
          <Route path="/update-product/:id" element={<UpdateProduct />} />
        </Routes>
      </Router>

      {/* User Routes */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Content></Content>
              </Layout>
            }
          />
          <Route
            path="/mens-products"
            element={
              <Layout>
                <MenProducts></MenProducts>
              </Layout>
            }
          />
          <Route
            path="/womens-products"
            element={
              <Layout>
                <WomenProducts></WomenProducts>
              </Layout>
            }
          />
          <Route
            path="/kids-products"
            element={
              <Layout>
                <KidsProducts></KidsProducts>
              </Layout>
            }
          />
          <Route
            path="/products/:id"
            element={
              <Layout>
                <ProductDetails></ProductDetails>
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart></Cart>
              </Layout>
            }
          />
          <Route
            path="/checkout"
            element={
              <Layout>
                <Checkout></Checkout>
              </Layout>
            }
          />

          {/* <Route index element={<Content />} />
            <Route
              path="/mens-products"
              element={<MenProducts></MenProducts>}
            />
            <Route
              path="/womens-products"
              element={<WomenProducts></WomenProducts>}
            />
            <Route
              path="/kids-products"
              element={<KidsProducts></KidsProducts>}
            />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} /> */}
          {/* </Route> */}
        </Routes>
      </Router>
    </>
  );
}
