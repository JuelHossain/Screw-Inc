

import { AppBar, Container,} from "@mui/material";
import { useState } from "react";
import ToolBar from "./ToolBar";



const Header = () => {
  const [nav, setNav] = useState(null);
   const openNavMenu = (e) => {
     setNav(e.currentTarget);
  };
    const closeNavMenu = () => {
      setNav(null);
    };
  return (
    <AppBar component={"header"} position="static">
      <Container maxWidth="xl">
        <ToolBar
          nav={nav}
          openNavMenu={openNavMenu}
          closeNavMenu={closeNavMenu}
        />
      </Container>
    </AppBar>
  );
};
export default Header;
