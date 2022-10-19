import { useMediaQuery, useTheme } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const HeaderContext = createContext();
export const HeaderProvider = ({ children }) => {
  const pages = ["Home", "Products", "Reviews", "Blog", "About"];
  const userPages = ["Dashboard", "Profile"];

  const [nav, setNav] = useState(null);
  const [userNav, setUserNav] = useState(null);
  const [isDashboard, setIsDashboard] = useState(false);

  const [drawer, setDrawer] = useState(false);
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    if (large) {
      setDrawer(true);
    } else setDrawer(false);
  }, [large]);

  const openDrawer = () => {
    setDrawer(true);
  };

  const closeDrawer = () => {
    setDrawer(false);
  };

  const openUserMenu = (e) => {
    setUserNav(e.currentTarget);
  };
  const closeUserMenu = () => {
    setUserNav(null);
  };

  const openNavMenu = (e) => {
    if (isDashboard) {
      openDrawer();
    } else {
      setNav(e.currentTarget);
    }
  };
  const closeNavMenu = () => {
    if (isDashboard) {
      closeDrawer();
    } else {
      setNav(null);
    }
  };

  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname.toLowerCase().includes("dashboard")) {
      setIsDashboard(true);
    } else {
      setIsDashboard(false);
    }
  }, [pathname]);

  const value = {
    pages,
    userPages,
    nav,
    userNav,
    isDashboard,
    drawer,
    openDrawer,
    closeDrawer,
    openNavMenu,
    closeNavMenu,
    openUserMenu,
    closeUserMenu,
  };
  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};
export const useHeader = () => useContext(HeaderContext);
