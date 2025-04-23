import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
export default function AccordionUsage({ data }) {
  return (
    <Box>
      {data.map((faq, index) => {
        return (
          <Accordion
            elevation={0}
            sx={{ marginTop: 5, border: "none" }}
            key={index}
          >
            <AccordionSummary
              expandIcon={<FaPlus />}
              aria-controls={`panel${index}`}
              id={`panel${index}`}
              sx={{ border: "none" }}
            >
              <Typography color="secondary.main" fontWeight={"bold"}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                border: "none",
                fontSize: 16,
                color: "#190202FF",
                fontWeight: "bold",
              }}
            >
              {faq.answer}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
