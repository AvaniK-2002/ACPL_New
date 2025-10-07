import React from "react";
import Header from "./components/Header";
import Home from "./home/page";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor"

export default function Page() {
  return (
    <div>
      <CustomCursor />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
