import { Toolbar } from "@mui/material";
import Logo from "./logo";
import NavBar from "./NavBar";
import UserButton from "./UserButton";

const ToolBar = () => {
  return (
    <Toolbar disableGutters className="justify-between">
      <Logo />
      <NavBar />
      <UserButton />
    </Toolbar>
  );
};

export default ToolBar;
