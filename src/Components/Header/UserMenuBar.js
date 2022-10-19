import { Menu, MenuItem } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router-dom";
import { useHeader } from "../../context/HeaderContext";
import auth from "../../firebase";

const UserMenuBar = () => {
  const { userNav, closeUserMenu } = useHeader();
  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={userNav}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(userNav)}
      onClose={closeUserMenu}
    >
      <MenuItem onClick={closeUserMenu}>
        <NavLink to={"/profile"}>{"Profile"}</NavLink>
      </MenuItem>

      <MenuItem
        onClick={() => {
          signOut(auth);
          localStorage.removeItem("accessToken");
          closeUserMenu();
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );
};

export default UserMenuBar;
