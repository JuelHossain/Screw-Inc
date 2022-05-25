import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import { AppBar, Drawer } from "../../Components/DashBoard/Drawer/Mixins";
import { Outlet } from "react-router-dom";
import ToolBar from "../../Components/Header/ToolBar";
import { useMediaQuery } from "@mui/material";
import Drawerheader from "../../Components/DashBoard/Drawer/Drawerheader";
import { AdminNavList, UserNavList } from "../../Components/DashBoard/Drawer/AdminNavList/AdminNavList";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../../Components/Shared/Loading";

export default function DashBoard() {
  const [admin, adminLoading] = useAdmin();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const large = useMediaQuery(theme.breakpoints.up("lg"));
  React.useEffect(() => {
    if (large) {
      setOpen(true);
    } else setOpen(false);
  }, [large]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  if (adminLoading) {
   return <Loading/>
 }
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* appbar  */}
      <AppBar position="fixed" open={open}>
        <ToolBar open={open} openNavMenu={handleDrawerOpen} />
      </AppBar>
      {/* drawer  */}
      <Drawer variant="permanent" open={open}>
        {/* drawer header  */}
        <Drawerheader theme={theme} handleDrawerClose={handleDrawerClose} />
        <Divider />
        {/* admin nav list  */}
        {admin ? <AdminNavList open={open} /> :
          <UserNavList open={open} />}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
