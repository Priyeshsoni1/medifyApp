import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <Box
      sx={{
        maxWidth: "1250px",
        margin: "0 auto",
      }}
    >
      <Container>
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Box
              textAlign={"left"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              gap={".5rem"}
              height={"100%"}
            >
              <Typography
                fontFamily={"Poppins"}
                fontWeight={600}
                fontSize={"1.4rem"}
                color="#000000"
              >
                Skip the travel! Find Online
              </Typography>
              <Stack direction={"row"} gap={"1rem"}>
                <Typography
                  fontFamily={"Poppins"}
                  fontWeight={1000}
                  fontSize={{ xs: "2.5rem", md: "3.5rem" }}
                  color="#000000"
                >
                  Medical
                </Typography>
                <Typography
                  fontFamily={"Poppins"}
                  fontWeight={1000}
                  fontSize={{ xs: "2.5rem", md: "3.5rem" }}
                  color="primary.main"
                >
                  Centers
                </Typography>
              </Stack>
              <Typography
                fontFamily={"Poppins"}
                fontWeight={300}
                fontSize={"1.2rem"}
                color="#5C6169"
              >
                Connect instantly with a 24x7 specialist or choose to video
                visit a particular doctor.
              </Typography>
              <Button
                sx={{
                  backgroundColor: "primary.main",
                  color: "#ffffff",
                  padding: ".7rem 1rem",
                  maxWidth: "8rem",
                }}
              >
                Find Centers
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Box src="/DoctorGroup.png" component={"img"} width={1} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
