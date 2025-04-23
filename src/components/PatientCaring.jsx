import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const PatientCaring = () => {
  return (
    <Box sx={{ backgroundColor: "#E7F0FF", padding: "2rem 0" }}>
      <Container>
        <Grid container>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Box
              src="/patientCaring.png"
              component={"img"}
              width={1}
              height={"auto"}
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingLeft: "2rem",
            }}
          >
            <Stack textAlign={"left"} justifyContent={"center"} gap={"2rem"}>
              <Typography fontWeight={"bold"} color="primary.main">
                HELPING PATIENTS FROM AROUND THE GLOBE!!{" "}
              </Typography>
              <Stack direction={"row"} gap={0.5}>
                {" "}
                <Typography variant="h2"> Patient </Typography>
                <Typography variant="h2" color="primary.main">
                  {" "}
                  Caring{" "}
                </Typography>
              </Stack>

              <Typography color="#77829D" fontWeight={500} fontFamily={"Inter"}>
                Our goal is to deliver quality of care in a courteous,
                respectful, and compassionate manner. We hope you will allow us
                to care for you and strive to be the first and best choice for
                healthcare.
              </Typography>
              <Stack gap={2}>
                <Box display={"flex"} flexDirection={"row"} gap={1}>
                  <img src="/blueTick.png" />
                  <Typography>Stay Updated About Your Health</Typography>
                </Box>
                <Box display={"flex"} flexDirection={"row"} gap={1}>
                  <img src="/blueTick.png" />
                  <Typography> Check Your Results Online </Typography>
                </Box>
                <Box display={"flex"} flexDirection={"row"} gap={1}>
                  {" "}
                  <img src="/blueTick.png" />
                  <Typography> Manage Your Appointments </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PatientCaring;
