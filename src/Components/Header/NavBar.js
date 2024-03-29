import { Box, Button } from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useHeader } from "../../context/HeaderContext";

const NavBar = () => {
  const { pages } = useHeader();
  const { pathname } = useLocation();
  return (
    <Box className={`hidden md:flex justify-center items-center`}>
      {pages.map((page) => (
        <Button
          variant={
            pathname === `/${page}` || (pathname === "/" && page === "Home")
              ? "contained"
              : "text"
          }
          component={NavLink}
          to={`/${page}`}
          key={page}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default NavBar;
