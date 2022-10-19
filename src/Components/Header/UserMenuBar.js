import { Logout, SupervisedUserCircleRounded } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useHeader } from "../../context/HeaderContext";
import auth from "../../firebase";

const UserMenuBar = () => {
  const { userNav, closeUserMenu } = useHeader();
  const navigate = useNavigate();
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
      <MenuItem
        onClick={() => {
          navigate("/Profile");
          closeUserMenu();
        }}
        sx={{
          gap: 2,
        }}
      >
        <SupervisedUserCircleRounded fontSize="small" />
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => {
          navigate("/Dashboard");
          closeUserMenu();
        }}
        sx={{
          gap: 2,
        }}
      >
        <SupervisedUserCircleRounded fontSize="small" />
        Dashboard
      </MenuItem>

      <MenuItem
        onClick={() => {
          signOut(auth);
          localStorage.removeItem("accessToken");
          closeUserMenu();
        }}
        sx={{
          gap: 2,
        }}
      >
        <Logout fontSize="small" /> Logout
      </MenuItem>
    </Menu>
  );
};

export default UserMenuBar;
