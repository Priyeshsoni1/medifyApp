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

const SearchByHospitals = ({ hospitals, setHospitals, hospitalAll = [] }) => {
  const [AutocompleteData, setAutocompleteData] = useState("");

  //I want uniqueName for Autocomplete
  const uniqueName = hospitalAll?.reduce((acc, curr) => {
    if (!acc.some((item) => item["Hospital Name"] === curr["Hospital Name"])) {
      acc.push(curr);
    }
    return acc;
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filterHospitals = hospitalAll.filter((hospital) => {
      return hospital["Hospital Name"]
        .toLowerCase()
        .includes(AutocompleteData["Hospital Name"].toLowerCase());
    });
    setHospitals(filterHospitals);
  };
  return (
    <Box sx={{ boxShadow: "rgba(0, 0, 0, 0) 0px 5px 15px" }}>
      <Container>
        <Stack padding={"1rem 0"}>
          <Grid container alignItems={"center"}>
            <Grid size={{ xs: 12, sm: 8, md: 8 }} padding={"1rem 2rem"}>
              <FormControl fullWidth>
                <Autocomplete
                  onChange={(e, value) => {
                    setAutocompleteData(value);
                    if (!value) {
                      setHospitals(hospitalAll);
                    }
                  }}
                  disablePortal
                  options={uniqueName}
                  sx={{ borderRadius: "10px" }}
                  getOptionLabel={(option) => `${option["Hospital Name"]}`}
                  renderInput={(params) => (
                    <TextField {...params} label="Search By Hospitals" />
                  )}
                />
              </FormControl>
            </Grid>{" "}
            <Grid size={{ xs: 12, sm: 4, md: 4 }} padding={"1rem 2rem"}>
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
