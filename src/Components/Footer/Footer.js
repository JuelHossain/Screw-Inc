import { Construction, Facebook, HailSharp, LocalHospitalSharp, PanToolAltSharp, Twitter, YouTube } from '@mui/icons-material';
import { Box, Container, Grid, Link, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import Copyright from './CopyRight';

const Footer = () => {
    return (
      <footer className="fixed left-0 right-0 bottom-0">
        <Box variant="outlined" bgcolor="primary.main" p={3} color="aliceblue">
          <Container maxWidth="xl">
            <Grid container>
              <Grid item xs={7}>
                <Construction sx={{ fontSize: "60px" }} />
                <Typography>
                  Magic Tools Industries Inc.
                  <br />
                  Providing reliable tools since 1992
                </Typography>
              </Grid>
              <Grid item xs="5">
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
                  <Copyright sx={{ mt:2,color:'aliceBlue',textAlign:'left' }} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
    );
};

export default Footer;