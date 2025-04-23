import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const OurFamData = () => {
  return (
    <Box bgcolor={"#E7F0FF"}>
      <Container>
        <Grid container alignItems="center">
          <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
            <Box
              textAlign="left"
              display="flex"
              flexDirection="column"
              gap={2}
              padding={3}
            >
              <Typography fontWeight={700} color="primary.main">
                CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
              </Typography>
              <Typography variant="h2" color="secondary.main">
                Our Families
              </Typography>
              <Typography color="#77829D" fontFamily="Inter">
                We will work with you to develop individualised care plans,
                including management of chronic diseases. If we cannot assist,
                we can provide referrals or advice about the type of
                practitioner you require. We treat all enquiries sensitively and
                in the strictest confidence.
              </Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
            <Box
              src={"/OurFamData.png"}
              component={"img"}
              width={1}
              height={"auto"}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurFamData;
