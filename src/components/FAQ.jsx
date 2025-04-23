import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import AccordionUsage from "./Accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Why choose our medical for your family?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Why we are different from others?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Trusted & experience senior care & love",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How to get appointment for emergency cases?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];
  return (
    <Box bgcolor={"#ffffff"} padding={4}>
      <Container>
        <Typography color="primary.main" fontWeight={600} textAlign={"center"}>
          Get Your Answer
        </Typography>
        <Typography variant="h2" m={2} textAlign={"center"}>
          Frequently Asked Question
        </Typography>
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Box
              src="/faqs-banner.jpg"
              component={"img"}
              width={1}
              height={"auto"}
            ></Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <AccordionUsage data={faqs} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQ;
