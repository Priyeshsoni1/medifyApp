import { Box, Typography } from "@mui/material";
import React from "react";

const OurMedicalSpecialist = () => {
  const data = [
    { img: "/heena.png", title: "Dr. Ahmad Khan", designation: "Neurologist" },
    {
      img: "/ankur.png",
      title: "Dr. Heena Sachdeva",
      designation: "Orthopadics",
    },
    { img: "/ahmad.png", title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: "/heena.png", title: "Dr. Ahmad Khan", designation: "Neurologist" },
    {
      img: "/ankur.png",
      title: "Dr. Heena Sachdeva",
      designation: "Orthopadics",
    },
    { img: "/ahmad.png", title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: "/heena.png", title: "Dr. Ahmad Khan", designation: "Neurologist" },
    {
      img: "/ankur.png",
      title: "Dr. Heena Sachdeva",
      designation: "Orthopadics",
    },
    { img: "/ahmad.png", title: "Dr. Ankur Sharma", designation: "Medicine" },
  ];
  return (
    <Box sx={{ backgroundColor: "#ffffff" }}>
      <Typography variant="h2">Our Medical Specialist</Typography>
    </Box>
  );
};

export default OurMedicalSpecialist;
