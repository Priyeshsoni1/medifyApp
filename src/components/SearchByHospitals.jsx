import {
  Autocomplete,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
const services = [
  { img: "AmbulanceImg.png", title: "Doctors" },
  { img: "CapsuleImg.png", title: "Labs" },
  { img: "HospitalImg.png", title: "Hospitals", active: true },
  { img: "LabImg.png", title: "Medical Store" },
  { img: "doctorImg.png", title: "Ambulance" },
];
const SearchByHospitals = ({ hospitals }) => {
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <Box sx={{ boxShadow: "rgba(0, 0, 0, 0) 0px 5px 15px" }}>
      <Container>
        <Stack padding={"1rem 0"}>
          <Grid container alignItems={"center"}>
            <Grid item size={{ xs: 12, sm: 8, md: 8 }} padding={"1rem 2rem"}>
              <FormControl fullWidth>
                <Autocomplete
                  disablePortal
                  options={hospitals}
                  sx={{ borderRadius: "10px" }}
                  key={hospitals.id}
                  getOptionLabel={(option) => option["Hospital Name"]}
                  renderInput={(params) => (
                    <TextField {...params} label="Search By Hospitals" />
                  )}
                />
              </FormControl>
            </Grid>{" "}
            <Grid item size={{ xs: 12, sm: 4, md: 4 }} padding={"1rem 2rem"}>
              <Button
                // disabled={!city || !state}
                onClick={handleSearch}
                sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                  padding: ".5rem 2rem",
                }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default SearchByHospitals;
