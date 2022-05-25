import { Construction, Facebook, Twitter, YouTube } from '@mui/icons-material';
import { Box, Container,  Grid, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Copyright from './CopyRight';

const Footer = () => {
  const {pathname} = useLocation();
  if (pathname.includes('Dashboard')) {
    return;
  }
    return (
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: 'primary.main',
            color:'aliceblue'
          }}
        >
          <Container maxWidth="xl">
                <Grid container spacing={2}>
                  <Grid item xs={7}>
                    <Construction sx={{ fontSize: "60px" }} />
                    <Typography>
                      Magic Tools Industries Inc.
                      <br />
                      Providing reliable tools since 1992
                    </Typography>
                  </Grid>
                  <Grid item xs={5} sx={{ mt: 3 }}>
                    <Typography
                      fontWeight={900}
                      textTransform={"uppercase"}
                      fontSize={16}
                    >
                      Social
                    </Typography>
                    <Stack direction={"row"} spacing={1}>
                      <Link>
                        {" "}
                        <Twitter sx={{ color: "skyblue" }} />{" "}
                      </Link>
                      <Link>
                        {" "}
                        <YouTube sx={{ color: "skyblue" }} />{" "}
                      </Link>
                      <Link>
                        {" "}
                        <Facebook sx={{ color: "skyblue" }} />{" "}
                      </Link>
                    </Stack>
                    <Copyright
                      sx={{ mt: 1, color: "aliceBlue", textAlign: "left" }}
                    />
                  </Grid>
                </Grid>
          </Container>
        </Box>
    );
};

export default Footer;