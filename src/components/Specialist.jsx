import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
const data = [
  { icon: "/DrugstoreImg.png", title: "Dentistry" },
  { icon: "/StethoscopeImg.png", title: "Primary Care" },
  { icon: "/HeartRateImg.png", title: "Cardiology" },
  { icon: "/HeartRateMonitorImg.png", title: "MRI Resonance" },
  { icon: "/BloodSampleImg.png", title: "Blood Test" },
  { icon: "/ImmuneImg.png", title: "Piscologist" },
  { icon: "/DrugstoreImg.png", title: "Laboratory" },
  { icon: "/X-RayImg.png", title: "X-Ray" },
];
const Specialist = () => {
  return (
    <Box sx={{ backgroundColor: "#E7F0FF", padding: "3rem 2rem" }}>
      <Container>
        <Typography color="secondary.main" variant="h2">
          Find By Specialisation
        </Typography>
        <Box margin={"3rem 1rem"}>
          <Grid container>
            {data.map((item, index) => {
              return (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Box
                    textAlign={"center"}
                    alignContent={"center"}
                    borderRadius={"5px"}
                    sx={{
                      backgroundColor: "#ffffff",
                      padding: "2rem",
                      margin: "1rem 2rem",
                      boxShadow: "0px 34px 44px 0px #D5DBE470",
                    }}
                  >
                    <Box
                      component={"img"}
                      src={item.icon}
                      height={60}
                      width={60}
                    />
                    <Typography
                      color="#B9B3B3FF"
                      fontWeight={550}
                      fontSize={"1rem"}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Specialist;
