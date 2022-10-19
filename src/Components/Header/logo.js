import { Construction } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import Menu from "./Menu";

const Logo = () => {
  return (
    <Box className={`flex items-center gap-1`}>
      <Menu />
      <Construction />
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
