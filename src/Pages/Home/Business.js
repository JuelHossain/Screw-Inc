import { Factory, PriceChange, Sell } from '@mui/icons-material';
import { Box, Container,Divider,Stack,Typography } from '@mui/material';
import React from 'react';

const BusinessCard = ({icon,title,text}) => {
    return (
      <Box sx={{ height: 350, p: 3, flex: 1 }}>
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
      <Container maxWidth={"lg"} sx={{ my: 10, textAlign: "center" }}>
        <Typography variant="h4">What We Do?</Typography>
        <Divider sx={{ mx: 30, my: 2 }} />

        <Box
          sx={{
            display: "flex",
            aligntItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <BusinessCard
            icon={<Sell sx={{ fontSize: 50 }} color="primary" />}
            title={"We Sell The Best Tools."}
            text={
              " WE sell the best tools since 1922. our tools is all best in the world that we can assure you the highest performances ever."
            }
          />
          <BusinessCard
            icon={<Factory sx={{ fontSize: 50 }} color="primary" />}
            title={"We Manufacture Our Tools"}
            text={
              " We are the Proudly manufacturing our own tools since 1922. we are using highly futuristic tools in our factory to build future ready tools."
            }
          />
          <BusinessCard
            icon={<PriceChange sx={{ fontSize: 50 }} color="primary" />}
            title={"Our Product Price Is Cheaper"}
            text={" The Price of Our Tools is cheap and reliable because we only keep 2% profit from our business . our goal is to give the world best tools."}
          />
        </Box>
      </Container>
    );
};

export default Business;