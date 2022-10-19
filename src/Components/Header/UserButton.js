import { Box, Button } from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase";
import UserAvatar from "./UserAvatar";
import UserMenuBar from "./UserMenuBar";

const UserButton = () => {
  const [user] = useAuthState(auth);
  return user ? (
    <Box>
      <Button className="hidden md:flex" variant="" component={Link} to={"/Dashboard"}>
        DashBoard
      </Button>
      <UserAvatar />
      <UserMenuBar />
    </Box>
  ) : (
    <Box sx={{ flexGrow: 0, display: "flex" }}>
      <Button
        component={Link}
        to={"/login"}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        Login
      </Button>
    </Box>
  );
};

export default UserButton;
