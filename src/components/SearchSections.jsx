import {
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
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
const services = [
  { img: "AmbulanceImg.png", title: "Doctors" },
  { img: "CapsuleImg.png", title: "Labs" },
  { img: "HospitalImg.png", title: "Hospitals", active: true },
  { img: "LabImg.png", title: "Medical Store" },
  { img: "doctorImg.png", title: "Ambulance" },
];
const SearchSections = ({ belowSection = false }) => {
  const [stateOption, setStateOption] = useState([]);
  const [cityOpiton, setCityOption] = useState([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const fetchState = async () => {
    try {
      const data = await fetch("https://meddata-backend.onrender.com/states");
      const response = await data.json();
      setStateOption(response);
    } catch (err) {
      console.log("State Fetch Error", err);
    }
  };
  const fetchCity = async (state) => {
    try {
      const data = await fetch(
        `https://meddata-backend.onrender.com/cities/${state}`
      );
      const response = await data.json();
      setCityOption(response);
    } catch (err) {
      console.log("State Fetch Error", err);
    }
  };
  useEffect(() => {
    fetchState();
  }, []);
  useEffect(() => {
    state && fetchCity(state);
  }, [state]);
  const handleSearch = () => {};
  return (
    <Box>
      <Container>
        <Stack>
          <Grid container>
            <Grid item size={{ xs: 12, sm: 4, md: 4 }} padding={"1rem 2rem"}>
              <FormControl fullWidth>
                <Select
                  sx={{ border: "none" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  displayEmpty
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <Typography
                          textAlign={"left"}
                          marginLeft={"2rem"}
                          color="#C5BFBFFF"
                        >
                          State
                        </Typography>
                      );
                    }
                    return selected;
                  }}
                  inputProps={{ "aria-label": "Age" }}
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                  // value={age}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                >
                  {/* Placeholder */}

                  {stateOption.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>{" "}
            <Grid item size={{ xs: 12, sm: 4, md: 4 }} padding={" 1rem 2rem"}>
              <FormControl fullWidth>
                <Select
                  sx={{ border: "none" }}
                  id="city"
                  displayEmpty
                  disabled={!state}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (!selected || selected.length === 0) {
                      return (
                        <Typography
                          textAlign={"left"}
                          marginLeft={"2rem"}
                          color="#C5BFBFFF"
                        >
                          City
                        </Typography>
                      );
                    }
                    return selected;
                  }}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  inputProps={{ "aria-label": "Age" }}
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                  // value={age}
                >
                  {cityOpiton.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item size={{ xs: 12, sm: 4, md: 4 }} padding={"1rem 2rem"}>
              <Button
                disabled={!city || !state}
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
        {belowSection && (
          <Stack margin={"3rem 0"}>
            <Typography
              fontSize={"1.3rem"}
              color="secondary.main"
              fontWeight={520}
            >
              You may be looking for
            </Typography>
            <Grid container margin={"2rem 0"}>
              {services.map((item, index) => {
                return (
                  <Grid size={{ xs: 6, sm: 2.4, md: 2.4 }}>
                    <Box
                      maxHeight={"5rem"}
                      bgcolor={"#FAFBFE"}
                      border={index == 2 ? "1px solid #2AA7FF" : "none"}
                      sx={{
                        padding: "2rem 0",
                        margin: "1rem",
                        borderRadius: "5px",
                      }}
                    >
                      <Box
                        component={"img"}
                        src={item.img}
                        width={50}
                        height={"auto"}
                      ></Box>
                      <Typography>{item.title}</Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default SearchSections;
