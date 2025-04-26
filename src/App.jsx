import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import FAQ from "./components/FAQ";

export const App = () => {
  return (
    <div>
      <Outlet />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
};
