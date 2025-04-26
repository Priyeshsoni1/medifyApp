import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import HospitalShow from "../../components/HospitalShow";
import { useParams, useSearchParams } from "react-router-dom";
import SearchByHospitals from "../../components/SearchByHospitals";
const MyBooking = () => {
  const [hospitals, setHospitals] = useState([]);
  const [hospitalAll, setHospitalAll] = useState([]);

  const fetchBooking = () => {
    try {
      const data = localStorage.getItem("bookings");
      const response = JSON.parse(data);
      setHospitals(response);
      setHospitalAll(response);
    } catch (err) {
      console.log("Booking Fetch Error", err);
    }
  };

  useEffect(() => {
    fetchBooking();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#E7F0FF" }}>
      {" "}
      <Box sx={{ backgroundColor: "#E7F0FF" }}>
        <Navbar />
      </Box>
      <Box
        bgcolor={"primary.main"}
        sx={{
          borderRadius: "0rem 0rem 20px 20px",
          marginBottom: "5rem",
          padding: { xs: "1rem 0", md: " 0" },
          width: "100%",
        }}
      >
        <Grid container alignItems={"center"}>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            {" "}
            <Typography
              variant="h1"
              component={"h1"}
              color="#ffff"
              fontSize={"2.5rem"}
            >
              My Bookings
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 8 }}
            textAlign={"left"}
            maxWidth={"700px"}
          >
            <Box
              sx={{
                // border: "1px solid black",

                maxWidth: { xs: "100%", md: "100%" },
                margin: "0 auto",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderRadius: "11px",
                backgroundColor: "#ffffff",
                top: "2rem",

                position: "relative",
              }}
            >
              <SearchByHospitals
                belowSection={false}
                hospitals={hospitals}
                hospitalAll={hospitalAll}
                setHospitals={setHospitals}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        textAlign={"left"}
        sx={{
          // border: "1px solid black",

          maxWidth: { xs: "100%", md: "80%" },
          margin: "0 auto",
        }}
      >
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 8 }}>
            {hospitals &&
              hospitals.map((hospital, index) => {
                return (
                  <HospitalShow
                    hospital={hospital}
                    key={index}

                    // timeSlots={timeSlots}
                  />
                );
              })}
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 4 }} textAlign={"center"}>
            <Box src="/AddImg.png" component={"img"}></Box>
          </Grid>
        </Grid>{" "}
      </Box>
    </Box>
  );
};

export default MyBooking;
