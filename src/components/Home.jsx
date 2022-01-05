import React from "react";
import Hero from "./Hero";
import Products from "./Products";
import Footer from "./Footer";
import CartModal from "./CartModal";
import Nav from "./Nav";

function Home() {
  return (
    <main className="home-container">
      <CartModal />
      <Nav />
      <Hero />
      <Products />
      <Footer />
    </main>
  );
}

export default Home;
