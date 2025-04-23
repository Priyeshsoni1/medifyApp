import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import FAQ from "./components/FAQ";
import OurFamData from "./components/OurFamData";
import BlogSection from "./components/BlogSection";
import PatientCaring from "./components/PatientCaring";
import OurMedicalSpecialist from "./components/OurMedicalSpecialist";

export const App = () => {
  return (
    <div>
      <OurMedicalSpecialist />
      <Outlet />
      <PatientCaring />
      <BlogSection />
      <OurFamData />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
};
