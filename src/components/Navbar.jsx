import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // md ~ 900px
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Find Doctors",
    "Hospitals",
    "Medicines",
    "Surgeries",
    "Software for Provider",
    "Facilities",
    "My Bookings",
  ];

  const NavButtons = ({ direction = "row", mobile = false }) => (
    <Stack
      direction={direction}
      spacing={2}
      sx={{
        alignItems: mobile ? "flex-start" : "center",
        p: mobile ? 2 : 0,
      }}
    >
      {navItems.map((item, idx) => (
        <Button
          key={idx}
          sx={{
            color: item === "My Bookings" ? "#fff" : "text.primary",
            backgroundColor:
              item === "My Bookings" ? "primary.main" : "transparent",
            width: mobile ? "100%" : "auto",
            justifyContent: mobile ? "flex-start" : "center",
          }}
          onClick={() => {
            navigate("/my-bookings");
          }}
        >
          {item}
        </Button>
      ))}
      {mobile && (
        <IconButton
          onClick={() => setMenuOpen(false)}
          sx={{ alignSelf: "flex-end", mt: 1 }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Stack>
  );

  return (
    <Box sx={{ width: "100%" }}>
      {" "}
      <Box bgcolor="primary.main" py={1} textAlign="center">
        <Typography fontSize=".8rem" color="#fff">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "0 auto",
          padding: "1rem 2rem",
          maxWidth: "1100px",
        }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={3}
        //   px={1}
      >
        <Box component="img" src="/MedifyLogoText.png" width="7rem" />

        {!isMobile && <NavButtons />}

        {isMobile && <MenuIcon onClick={() => setMenuOpen(true)} />}
      </Box>
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        PaperProps={{
          sx: { width: "75%", p: 2 },
        }}
      >
        <NavButtons direction="column" mobile />
      </Drawer>
    </Box>
  );
};

export default Navbar;
