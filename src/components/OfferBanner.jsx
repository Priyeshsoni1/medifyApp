import { Box, Container } from "@mui/material";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const data = ["/OfferImg.png", "/OfferImg2.png", "/OfferImg.png"];
const OfferBanner = () => {
  return (
    <Box>
      <Container>
        <Swiper
          slidesPerView={1} // Default number of slides visible on smaller screens
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          style={{ padding: "10rem 0 6rem 0" }} // Adjust padding for better spacing on all screens
          modules={[Pagination]}
          breakpoints={{
            // When window width is >= 600px (sm breakpoint)
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // When window width is >= 960px (md breakpoint)
            960: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // When window width is >= 1200px (lg breakpoint)
            1200: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            // You can add more breakpoints as needed for larger screens
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Box src={item} component={"img"} width={1} height={"auto"} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default OfferBanner;
