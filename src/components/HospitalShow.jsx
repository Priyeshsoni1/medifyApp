import {
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ShowTimeBox from "./ShowTimeBox";

const HospitalShow = ({ hospital, timeSlots, showTimeSlots }) => {
  const [openTimePicker, setOpenTimePicker] = useState(false);
  const {
    "Provider ID": providerId,
    "Hospital Name": hospitalName,
    Address: address,
    City: city,
    State: state,
    "ZIP Code": zipCode,
    "County Name": countyName,
    "Phone Number": phoneNumber,
    "Hospital Type": hospitalType,
    "Hospital Ownership": hospitalOwnership,
    "Emergency Services": emergencyServices,
    "Meets criteria for meaningful use of EHRs": meaningfulUseEHRs,
    "Hospital overall rating": hospitalOverallRating,
    "Hospital overall rating footnote": hospitalOverallRatingFootnote,
    "Mortality national comparison": mortalityNationalComparison,
    "Mortality national comparison footnote":
      mortalityNationalComparisonFootnote,
    "Safety of care national comparison": safetyOfCareNationalComparison,
    "Safety of care national comparison footnote":
      safetyOfCareNationalComparisonFootnote,
    "Readmission national comparison": readmissionNationalComparison,
    "Readmission national comparison footnote":
      readmissionNationalComparisonFootnote,
    "Patient experience national comparison":
      patientExperienceNationalComparison,
    "Patient experience national comparison footnote":
      patientExperienceNationalComparisonFootnote,
    "Effectiveness of care national comparison":
      effectivenessOfCareNationalComparison,
    "Effectiveness of care national comparison footnote":
      effectivenessOfCareNationalComparisonFootnote,
    "Timeliness of care national comparison":
      timelinessOfCareNationalComparison,
    "Timeliness of care national comparison footnote":
      timelinessOfCareNationalComparisonFootnote,
    "Efficient use of medical imaging national comparison":
      efficientUseMedicalImagingNationalComparison,
  } = hospital;
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        margin: "0rem 1rem 1rem 1rem",
        padding: "2rem 1rem 1rem 1rem",
        borderRadius: "10px",
      }}
    >
      <Grid container sx={{ marginBottom: "2rem" }}>
        <Grid size={{ xs: 4, sm: 4, md: 2 }}>
          <Box
            sx={{
              backgroundColor: "primary.main",
              borderRadius: "50%",

              height: "7rem",
              width: "7rem",
              display: "flex", // Enable flexbox
              justifyContent: "center", // Horizontal centering
              alignItems: "center", // Vertical centering
              textAlign: "center",
            }}
          >
            <Box src="/HospitalStrImg.png" component={"img"} />
          </Box>
        </Grid>
        <Grid size={{ xs: 8, sm: 8, md: 6 }} padding={"0 2rem"}>
          <Typography
            fontFamily={"Poppins"}
            component={"h3"}
            sx={{ fontSize: "1.2rem", color: "#14BEF0", fontWeight: 600 }}
          >
            {hospitalName}
          </Typography>
          <Typography
            fontFamily={"Poppins"}
            sx={{ fontSize: "1rem", color: "#000000", fontWeight: 600 }}
          >
            {address}, {city}
          </Typography>
          <Typography
            fontFamily={"Poppins"}
            sx={{ fontSize: "1rem", color: "#414146", fontWeight: 400 }}
          >
            {hospitalType}
          </Typography>
          <Stack direction={"row"} gap={1} alignContent={"center"}>
            <Typography
              fontFamily={"Poppins"}
              sx={{
                fontSize: "1",
                color: "#02A401",
                fontWeight: 700,
              }}
            >
              FREE
            </Typography>
            <Typography
              fontFamily={"Poppins"}
              sx={{
                fontSize: ".8rem",
                color: "primary.main",
                fontWeight: 400,
              }}
            >
              ₹500 Consulations Fee at clinic
            </Typography>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4 }}>
          {showTimeSlots ? (
            <Box
              sx={{
                display: "flex",
                gap: ".5rem",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Typography sx={{ color: " #01A400", fontWeight: "bold" }}>
                Available Today
              </Typography>
              <Button
                onClick={() => {
                  setOpenTimePicker(!openTimePicker);
                }}
                sx={{ color: "#ffffff", backgroundColor: "primary.main" }}
              >
                Book FREE Center Visit
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: ".5rem",
                marginTop: "1rem",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                height: "100%",
              }}
            >
              <Chip
                label={hospital.bookingTime}
                variant="outlined"
                sx={{
                  border: "1px solid #8FD8E5FF",
                  borderRadius: "5px",
                  color: "primary.main",
                }}
              />
              <Chip
                label={hospital.bookingDate}
                variant="outlined"
                sx={{
                  border: "1px solid #0EA71DFF",
                  borderRadius: "5px",
                  color: "#0EA71DFF",
                }}
              />
            </Box>
          )}
        </Grid>
      </Grid>
      {showTimeSlots && openTimePicker && (
        <ShowTimeBox hospital={hospital} timeSlots={timeSlots} />
      )}
    </Box>
  );
};

export default HospitalShow;
