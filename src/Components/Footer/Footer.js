import { Construction, Facebook, HailSharp, LocalHospitalSharp, PanToolAltSharp, Twitter, YouTube } from '@mui/icons-material';
import { Box, Container, Grid, Link, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
      <footer>
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
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
    );
};

export default Footer;