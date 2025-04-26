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
const SearchPage = () => {
  const [seachParams, setSearchParams] = useSearchParams();
  const [hospitals, setHospitals] = useState([]);
  const [state, setState] = useState(seachParams.get("state"));
  const [city, setCity] = useState(seachParams.get("city"));

  const fetchHopspital = async () => {
    try {
      const res = await fetch(
        `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
      );
      const data = await res.json();
      setHospitals(data);
    } catch (err) {
      console.log("Fetch Hospital Error", err);
    }
  };
  useEffect(() => {
    setState(seachParams.get("state"));
    setCity(seachParams.get("city"));
    if (state && city) fetchHopspital();
  }, [city, state, seachParams]);
  const timeSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  return (
    <Box sx={{ backgroundColor: "#E7F0FF" }}>
      {" "}
      <Box sx={{ backgroundColor: "#E7F0FF" }}>
        <Navbar />
      </Box>
      <Box
        bgcolor={"primary.main"}
        sx={{ borderRadius: "0rem 0rem 20px 20px", marginBottom: "5rem" }}
      >
        <Box
          sx={{
            // border: "1px solid black",

            maxWidth: { xs: "100%", md: "80%" },
            margin: "0 auto",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "11px",
            backgroundColor: "#ffffff",
            top: "2rem",

            position: "relative",
          }}
        >
          <SearchSections belowSection={false} />
        </Box>
      </Box>
      <Box
        textAlign={"left"}
        sx={{
          // border: "1px solid black",

          maxWidth: { xs: "100%", md: "80%" },
          margin: "0 auto",
        }}
      >
        {hospitals.length > 0 && city && state && (
          <Box p={2}>
            <Typography
              fontFamily={"Poppins"}
              sx={{ fontWeight: "550", fontSize: "1.4rem" }}
            >
              {hospitals.length} medical centers available in {state}
            </Typography>
            <Stack direction={"row"} gap={1}>
              <img src="/verified.png" width={25} height={25} />
              <Typography
                fontFamily={"Poppins"}
                sx={{ fontWeight: "500", fontSize: "1rem", color: "#787887" }}
              >
                Book appointments with minimum wait-time & verified doctor
                details
              </Typography>
            </Stack>{" "}
          </Box>
        )}
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 8 }}>
            {hospitals.map((hospital, index) => {
              return (
                <HospitalShow
                  hospital={hospital}
                  key={index}
                  showTimeSlots={true}
                  timeSlots={timeSlots}
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

export default SearchPage;
