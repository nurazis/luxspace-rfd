/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb/index";
import Footer from "../parts/Footer";

function Cart() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <Footer />
    </>
  );
}

export default Cart;
