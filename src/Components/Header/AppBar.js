import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {  Construction } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import Loading from "../Shared/Loading";
import { signOut } from "firebase/auth";
// import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard"];

const ResponsiveAppBar = () => {
  const [user,loading] = useAuthState(auth);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (loading) {
  return<Loading></Loading>
}
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        {/* TOOLBAR  */}
        <Toolbar disableGutters>
          {/* LOGO ICON  */}
          <Construction sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          {/* LOGO TITLE  */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SCREW
          </Typography>
          {/* VERTICAL NAVBAR START  */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* MENU ICON BUTTON  */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* MENU ICON  */}
              <MenuIcon />
            </IconButton>
            {/* VERTICAL NAVBAR ITEMS  */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* LOOPING THROUGH NAVBAR ITEMS  */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink to={`/${page}`}>{page}</NavLink>
                  <hr className="mr-16" />
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* LOGO  */}
          <Construction sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SCREW
          </Typography>

          {/* NAVBAR ITEM  */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* LOOPING THROUGH NAVBAR ITEMS  */}
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink to={page}>{page}</NavLink>
              </Button>
            ))}
          </Box>

          {/* USER PROFILE  */}
          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              {user.displayName && (
                <Button variant="">{user.displayName}</Button>
              )}
              {/* //TOOLTIP AND THE BUTTON OF USER  */}
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* USER IMAGE  */}
                  <Avatar
                    alt={user.displayName}
                    src={user.photoURL ? user.photoUrl:''}
                  />
                </IconButton>
              </Tooltip>
              {/* MENU BAR VERTICAL */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    sx={{ m: 0 }}
                    key={setting}
                    onClick={handleCloseUserMenu}
                  >
                    <NavLink to={setting}>{setting}</NavLink>
                    <hr className="ml-20" />
                  </MenuItem>
                ))}

                <MenuItem
                  onClick={() => {
                    signOut(auth);
                    handleCloseUserMenu();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0, display: "flex" }}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                <NavLink to={"/login"}> Login</NavLink>
              </Button>
            </Box>
          )}
          {/* USER PROFILE ENDED HERE  */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
