import { Box } from "@mui/material";
import { useHeader } from "../../context/HeaderContext";
import MenuAppBar from "./MenuAppBar";
import MenuIcon from "./MenuIcon";

const Menu = () => {
  const { isDashboard } = useHeader();
  return (
    <Box className={`flex-grow-0 ${isDashboard ? "flex" : "flex md:hidden"}`}>
      <MenuIcon />
      <MenuAppBar />
    </Box>
  );
};

export default Menu;
