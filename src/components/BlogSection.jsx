import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Card = () => {
  return (
    <Box margin={4} border={"1px solid #EBE0E0FF"} borderRadius={"5px"}>
      <Box src="/blogImage.png" component={"img"} width={1} height={"auto"} />
      <Box>
        <Typography
          fontSize={"1rem"}
          color="#878181FF"
          style={{ margin: ".5rem 0" }}
        >
          Medical | March 31,2022
        </Typography>
        <Typography
          fontWeight={"bold"}
          color="secondary.main"
          fontSize={".9rem"}
          sx={{ margin: "1 1rem" }}
        >
          6 Tips To Protect Your Mental Health When Your're Sick
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ margin: ".2rem 1rem" }}
        >
          <Box component="img" src={"doctorBlog.png"} height={32} width={32} />
          <Typography
            fontWeight={"bold"}
            color="secondary.main"
            fontSize={{ xs: 12, md: 16 }}
          >
            Rebecca Lee
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

const BlogSection = () => {
  return (
    <Box sx={{ backgroundColor: "#ffffff", padding: 1 }}>
      <Container>
        <Typography color="primary.main" fontWeight={"bold"}>
          Blog & News
        </Typography>
        <Typography variant="h2">Read Our Latest News</Typography>
        <Grid container>
          <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
            <Card />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
            <Card />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
            <Card />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogSection;
