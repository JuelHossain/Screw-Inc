import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const MenuIcon = ({ openNavMenu, open }) => {
  
  const { pathname } = useLocation();
  if (pathname.includes('Dashboard')) {
    return (
      <IconButton
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        aria-label="open drawer"
        onClick={openNavMenu}
        edge="start"
        sx={{
          mx: "13px",
          ...(open && { display: "none" }),
        }}
      >
        <Menu />
      </IconButton>
    );
  }
  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={openNavMenu}
        color="inherit"
      >
        <Menu />
      </IconButton>
    </div>
  );
};

export default MenuIcon;
