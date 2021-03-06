
import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import bannerimage from '../../assets/screw image.webp'

const Banner = () => {
    return (
      <Container maxWidth={"lg"}>
        <Box sx={{ display: "flex",}}>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              ml:4,
              flex: 1,
            }}
          >
            <Typography variant="h2">Screw-Inc.</Typography>
            <Typography variant="h5">We Manufacture the Futuristic smart Tools Which We Are Mad to buy...</Typography>
          </Stack>
          <Box sx={{flex:1}}>
            <img
              className="w-full h-full object-cover m-2"
              src={bannerimage}
              alt="hero-banner"
            />
          </Box>
        </Box>
      </Container>
    );
};

export default Banner;