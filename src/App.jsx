import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import FAQ from "./components/FAQ";
import OurFamData from "./components/OurFamData";
import BlogSection from "./components/BlogSection";
import PatientCaring from "./components/PatientCaring";
import OurMedicalSpecialist from "./components/OurMedicalSpecialist";
import Specialist from "./components/Specialist";
import OfferBanner from "./components/OfferBanner";
import SearchSections from "./components/SearchSections";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { Box, Container } from "@mui/material";

export const App = () => {
  return (
    <div>
      <Box>
        {" "}
        <Box sx={{ backgroundColor: "#E7F0FF" }}>
          <Navbar />
          <HeroSection />
        </Box>
        <SearchSections belowSection={true} />
        <OfferBanner />
        <Specialist />
        <OurMedicalSpecialist />
        <Outlet />
        <PatientCaring />
        <BlogSection />
        <OurFamData />
        <FAQ />
        <ContactSection />
        <Footer />
      </Box>{" "}
    </div>
  );
};
