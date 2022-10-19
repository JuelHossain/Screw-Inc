import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";
import React from "react";
import { useHeader } from "../../../context/HeaderContext";
import { DrawerHeader } from "./Mixins";

const Drawerheader = () => {
  const theme = useTheme();
  const { closeDrawer } = useHeader();
  console.log(closeDrawer);
  return (
    <DrawerHeader>
      <IconButton onClick={closeDrawer}>
        {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
      </IconButton>
    </DrawerHeader>
  );
};

export default Drawerheader;
