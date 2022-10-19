import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useHeader } from "../../context/HeaderContext";

const MenuAppBar = () => {
  const { nav, closeNavMenu, pages } = useHeader();
  return (
    <div>
      <Menu
        id="menu-appbar"
        anchorEl={nav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(nav)}
        onClose={closeNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={closeNavMenu}>
            <NavLink to={`/${page}`}>{page}</NavLink>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuAppBar;
