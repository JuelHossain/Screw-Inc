import { Box, Button, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation } from "react-router-dom";
import auth from "../../firebase";
import Loading from "../Shared/Loading";
import Logo from "./logo";
import MenuAppBar from "./MenuAppBar";
import MenuIcon from "./MenuIcon";
import NavBar from "./NavBar";
import UserAvatar from "./UserAvatar";
import UserMenuBar from "./UserMenuBar";
const pages = ["Home","Products","Reviews","Blog","About"];
const ToolBar = ({ open,openNavMenu,closeNavMenu,nav}) => {
  const [user, loading, error] = useAuthState(auth);
    const [userNav, setUserNav] = useState(null);
    const [isDashboard, setIsDashboard] = useState(false);
    const { pathname } = useLocation();
    useEffect(() => {
        if (pathname === '/Dashboard') {
            setIsDashboard(true);
      }
      if (error) {
    window.location.reload();
  }
    },[pathname,error])
  const openUserMenu = (e) => {
    setUserNav(e.currentTarget);
  };
  const closeUserMenu = () => {
    setUserNav(null);
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <Toolbar disableGutters>
      {/* logo for bigger screen  */}
      {/* menubar  */}
      <Box
        sx={{
          flexGrow: 0,
          ...(isDashboard
            ? { display: "flex" }
            : { display: { xs: "flex", md: "none" } }),
        }}
      >
        <MenuIcon openNavMenu={openNavMenu} open={open} />
        <MenuAppBar nav={nav} closeNavMenu={closeNavMenu} pages={pages} />
      </Box>
      <Logo xs="none" md="flex" />
      {/* logo for small screen  */}
      <Logo xs="flex" md="none" />

      {/* navbar for bigger screen  */}
      <NavBar pages={pages} />

      {/* user profile  */}
      {user ? (
        <Box sx={{ flexGrow: 0 }}>
          <Button variant="" component={NavLink} to={"/Dashboard"}>
            DashBoard
          </Button>
          {/* user button and phot  */}
          <UserAvatar user={user} openUserMenu={openUserMenu} />
          {/* user menu bar   */}
          <UserMenuBar userNav={userNav} closeUserMenu={closeUserMenu} />
        </Box>
      ) : (
        <Box sx={{ flexGrow: 0, display: "flex" }}>
          <Button
            component={NavLink}
            to={"/login"}
            sx={{ my: 2, color: "white", display: "block" }}
          >
             Login
          </Button>
        </Box>
      )}
    </Toolbar>
  );
};

export default ToolBar;
