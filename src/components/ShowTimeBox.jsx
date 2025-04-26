import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import moment from "moment";
import { Button, Chip, Typography } from "@mui/material";
import { v4 } from "uuid";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ShowTimeBox = ({ timeSlots, hospital }) => {
  const [value, setValue] = React.useState(0);
  const tabsRef = React.useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = 100;
      tabsRef.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
      setValue((prev) => prev - 1);
    }
  };

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton onClick={() => scrollTabs("left")}>
          <ArrowBackIosIcon />
        </IconButton>
        <Box sx={{ overflowX: "auto", flex: 1 }} ref={tabsRef}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="scrollable tabs"
            variant="scrollable"
            scrollButtons={false}
          >
            {[...Array(7)].map((_, i) => {
              let label;
              if (i === 0) {
                label = "Today";
              } else if (i === 1) {
                label = "Tomorrow";
              } else {
                label = moment().add(i, "days").format("ddd, D MMM");
              }
              return <Tab key={i} label={label} {...a11yProps(i)} />;
            })}
          </Tabs>
        </Box>
        <IconButton onClick={() => scrollTabs("right")}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {[...Array(7)].map((_, i) => (
        <CustomTabPanel key={i} value={value} index={i}>
          {["morning", "afternoon", "evening"].map((period) => (
            <Box
              key={period}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "row" },
                padding: "1rem",
                borderBottom: "1px solid #E0E0E0",
                gap: 2,
              }}
            >
              <Typography sx={{ fontWeight: 600, minWidth: "100px" }}>
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.5,
                }}
              >
                {timeSlots?.[period]?.map((timeSlot, index) => (
                  <Chip
                    label={timeSlot}
                    variant="outlined"
                    onClick={() => {
                      const completInfo = {
                        id: v4(),
                        ...hospital,
                        timeSlot,
                        date: moment().add(i, "days").format("YYYY-MM-DD"),
                      };
                      const oldData = localStorage.getItem("hospital");
                      const oldDataParsed = JSON.parse(oldData) || [];
                      const newData = [...oldDataParsed, completInfo];
                      localStorage.setItem("hospital", JSON.stringify(newData));
                    }}
                    key={index}
                    sx={{
                      border: "1px solid #8FD8E5FF",
                      borderRadius: "5px",
                      color: "primary.main",
                      cursor: "pointer",
                      transition: "all 0.3s ease", // smooth transition
                      "&:hover": {
                        backgroundColor: "#16B3A9FF", // dark red
                        color: "#000000",
                        borderColor: "#18B69FFF", // optional to match bg
                      },
                      "& .MuiChip-label": {
                        color: "inherit", // fix label color inheriting correctly
                      },
                      //   boxShadow: "0 0 10px rgba(132, 65, 65, 0.5)",
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default ShowTimeBox;
