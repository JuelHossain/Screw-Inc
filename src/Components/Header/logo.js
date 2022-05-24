import { Construction } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

const Logo = ({xs,md}) => {
    return (
      <Box sx={{ flexGrow: 1, display: { xs: xs, md:md ,alignItems:'center'}}}>
        <Construction sx={{mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          SCREW
        </Typography>
      </Box>
    );
};

export default Logo;