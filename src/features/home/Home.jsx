import { Box } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import SearchSections from "../../components/SearchSections";
import OfferBanner from "../../components/OfferBanner";
import Specialist from "../../components/Specialist";
import OurMedicalSpecialist from "../../components/OurMedicalSpecialist";
import { Outlet } from "react-router-dom";
import PatientCaring from "../../components/PatientCaring";
import BlogSection from "../../components/BlogSection";
import OurFamData from "../../components/OurFamData";

const Home = () => {
  return (
    <Box>
      {" "}
      <Box sx={{ backgroundColor: "#E7F0FF" }}>
        <Navbar />
        <HeroSection />
      </Box>
      <Box
        sx={{
          // border: "1px solid black",
          maxWidth: { xs: "100%", md: "80%" },
          margin: "0 auto",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "11px",
          backgroundColor: "#ffffff",
          top: "-10rem",
          position: "relative",
        }}
      >
        <SearchSections belowSection={true} />
      </Box>
      <OfferBanner />
      <Specialist />
      <OurMedicalSpecialist />
      <Outlet />
      <PatientCaring />
      <BlogSection />
      <OurFamData />
    </Box>
  );
};

export default Home;
