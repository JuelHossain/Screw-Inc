import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import * as React from "react";
import { Outlet } from "react-router-dom";
import {
  AdminNavList,
  UiNavList,
  UserNavList,
} from "../../Components/DashBoard/Drawer/AdminNavList/AdminNavList";
import Drawerheader from "../../Components/DashBoard/Drawer/Drawerheader";
import { AppBar, Drawer } from "../../Components/DashBoard/Drawer/Mixins";
import ToolBar from "../../Components/Header/ToolBar";
import Loading from "../../Components/Shared/Loading";
import { useHeader } from "../../context/HeaderContext";
import useAdmin from "../../Hooks/useAdmin";

export default function DashBoard() {
  const [admin, adminLoading] = useAdmin();
  const { drawer } = useHeader();

  if (adminLoading) {
    return <Loading />;
  }
  return (
    <Box sx={{ display: "flex" }} >
      <CssBaseline />
      <AppBar position="fixed" open={drawer}>
        <ToolBar />
      </AppBar>
      {/* drawer  */}
      <Drawer variant="permanent" open={drawer}>
        <Drawerheader />
        <Divider />
        {admin ? <AdminNavList open={drawer} /> : <UserNavList open={drawer} />}
        <Divider />
        <UiNavList open={drawer} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
        <Outlet />
      </Box>
    </Box>
  );
}
