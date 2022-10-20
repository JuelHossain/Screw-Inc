import { Box, Container } from "@mui/material";
import React from "react";
import bannerimage from "../../assets/screw image.webp";

const Banner = () => {
  return (
    <Container maxWidth={"xl"} className="mt-5">
      <Box className="flex w-full flex-col sm:flex-row py-2 gap-5">
        <Box className="flex flex-col flex-1 justify-center items-center text-center sm:items-start sm:text-left gap-2 sm:ml-5 ml-3 md:ml-8 lg:ml-10 ">
          <p className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-blue-500">
            Screw-Inc.
          </p>
          <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
            We Manufacture the Futuristic smart Tools Which you will be Mad to
            buy...
          </p>
        </Box>
        <Box className="flex-1">
          <img
            className="w-full h-full object-cover "
            src={bannerimage}
            alt="hero-banner"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Banner;
