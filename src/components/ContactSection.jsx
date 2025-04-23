import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const ContactSection = () => {
  return (
    <Box
      padding={6}
      sx={{
        background:
          "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          size={{ xs: 12, sm: 6, md: 6 }}
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          // bgcolor={"red"}
        >
          <Box width="100%" maxWidth="600px">
            {" "}
            {/* You can limit the max width if needed */}
            <img
              src="/mobile.jpg"
              alt="Mobile"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>

        <Grid
          item
          size={{ xs: 12, sm: 6, md: 6 }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"space-between"}
        >
          <Stack flexDirection={"row"}>
            <Box>
              <img
                src="/Vector.png"
                width={"100%"}
                height={"auto"}
                style={{ maxHeight: "100px", maxWidth: "60px" }}
              />
            </Box>
            <Box>
              {" "}
              <Typography
                fontFamily={"Poppins"}
                fontSize={"48px"}
                fontWeight={"bold"}
                color="#1B3C74FF"
                flexDirection={"row"}
              >
                Download the{" "}
                <Typography
                  fontFamily={"Poppins"}
                  fontSize={"48px"}
                  fontWeight={"bold"}
                  color="#2AA7FF"
                >
                  Medify
                </Typography>{" "}
                App
              </Typography>
              <Typography fontSize={"16px"} fontWeight={"bold"} color="#414146">
                Get the link to download the app
              </Typography>{" "}
            </Box>
          </Stack>

          <Stack
            flexDirection={"row"}
            gap={10}
            alignItems={"center"}
            maxWidth={"500px"}
          >
            <TextField
              sx={{
                border: "1px solid #F0F0F0",
              }}
              placeholder="Enter Phone number"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  ),
                },
              }}
              required
            />{" "}
            <Button sx={{ bgcolor: "primary.main", color: "#ffffff" }}>
              Send Sms
            </Button>
          </Stack>
          <Stack
            direction={"row"}
            spacing={{ xs: 2, sm: 10 }}
            alignItems="center"
            maxWidth={"500px"}
            justifyContent="center"
          >
            {["/apple_store.png", "/google_play.png"].map((src, idx) => (
              <Box
                key={idx}
                component="img"
                src={src}
                alt={
                  idx === 0
                    ? "Download on the App Store"
                    : "Get it on Google Play"
                }
                sx={{
                  width: { xs: "6rem", sm: "224px" }, // smaller on mobile
                  height: "auto",
                }}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
