import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const FooterLinkBox = ({ children }) => {
  return (
    <Link color="#fff">
      <Stack color="#fff" direction={"row"} gap={0.5} alignItems={"center"}>
        <MdKeyboardArrowRight size={"1.5rem"} />
        {children}
      </Stack>
    </Link>
  );
};

const footerLinks1 = [
  "About Us",
  "Our Pricing",
  "Our Gallery",
  "Appointment",
  "Privacy Policy",
];

const footerLinks2 = [
  "Orthology",
  "Neurology",
  "Dental Care",
  "Opthalmology",
  "Cardiology",
];

const Footer = () => {
  return (
    <Box bgcolor="secondary.main" pt={12} pb={6}>
      <Grid container spacing={2}>
        {/* Each Grid  now takes 25% width on medium screens and up */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Stack alignItems={"center"} gap={"5rem"}>
            <img src="MedifyLogoText.png" width={"120rem"}></img>
            <Stack direction={"row"} gap={"2rem"}>
              <img src="/facebook.png" width={"30rem"}></img>
              <img src="/twitter.png" width={"30rem"}></img>
              <img src="/youtube.png" width={"30rem"}></img>
              <img src="/pinterest.png" width={"30rem"}></img>
            </Stack>
          </Stack>
        </Grid>
        {[footerLinks1, footerLinks2, footerLinks1].map((links, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Stack spacing={2}>
              {links.map((link, i) => (
                <FooterLinkBox key={i}>{link}</FooterLinkBox>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>

      <Typography
        fontWeight={300}
        color="#fff"
        fontSize={16}
        pt={3}
        pl={10}
        mt={5}
        borderTop="1px solid rgba(255,255,255,0.1)"
        textAlign="left"
      >
        Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
