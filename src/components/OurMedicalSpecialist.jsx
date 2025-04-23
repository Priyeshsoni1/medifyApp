import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const Card = ({ img, title, designation }) => {
  return (
    <Box>
      <Stack textAlign={"center"}>
        <Box component={"img"} src={img} width={1} height={"auto"} />
        <Typography color="secondary.main" fontSize={"1.1rem"} fontWeight={550}>
          {title}
        </Typography>
        <Typography color="primary.main" fontWeight={500}>
          {designation}
        </Typography>
      </Stack>
    </Box>
  );
};

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
    <Box sx={{ backgroundColor: "#ffffff", padding: 2 }}>
      <Container>
        <Typography variant="h2">Our Medical Specialist</Typography>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          centeredSlides={true}
          breakpoints={{
            767: {
              slidesPerView: 4,
            },
          }}
          pagination={{
            clickable: true,
          }}
          style={{ padding: "4rem" }}
          modules={[Pagination]}
        >
          <Box>
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  img={item.img}
                  title={item.title}
                  designation={item.designation}
                />
              </SwiperSlide>
            ))}
          </Box>
        </Swiper>
      </Container>
    </Box>
  );
};

export default OurMedicalSpecialist;
