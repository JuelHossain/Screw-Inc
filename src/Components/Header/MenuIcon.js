import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useHeader } from "../../context/HeaderContext";

const MenuIcon = ({ open }) => {
  const { isDashboard, openNavMenu } = useHeader();

  if (isDashboard) {
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
