import { Factory, PriceChange, Sell } from '@mui/icons-material';
import { Box, Container,Divider,Grid,Stack,Typography } from '@mui/material';
import React from 'react';

const BusinessCard = ({icon,title,text}) => {
    return (
      <Box sx={{ p: 3, flex: 1 }}>
        <Stack sx={{ alignItems: "center" }} spacing={2}>
          {icon}
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h6">{text}</Typography>
        </Stack>
      </Box>
    );
}
const Business = () => {
    return (
      <Container maxWidth={"lg"} sx={{ my: 10, textAlign: "center" }} mx="auto">
        <Typography variant="h4">What We Do?</Typography>
        <Divider sx={{ mx: 30, my: 2 }} />

        <Grid container spacing={2} marginX={"auto"} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BusinessCard
              icon={<Sell sx={{ fontSize: 50 }} color="primary" />}
              title={"We Sell The Best Tools."}
              text={
                " WE sell the best tools since 1922. our tools is all best in the world that we can assure you the highest performances ever."
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BusinessCard
              icon={<Factory sx={{ fontSize: 50 }} color="primary" />}
              title={"We Manufacture Our Tools"}
              text={
                " We are the Proudly manufacturing our own tools since 1922. we are using highly futuristic tools in our factory to build future ready tools."
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BusinessCard
              icon={<PriceChange sx={{ fontSize: 50 }} color="primary" />}
              title={"Our Product Price Is Cheaper"}
              text={
                " The Price of Our Tools is cheap and reliable because we only keep 2% profit from our business . our goal is to give the world best tools."
              }
            />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Business;