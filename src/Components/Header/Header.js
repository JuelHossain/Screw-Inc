import { AppBar, Container } from "@mui/material";
import ToolBar from "./ToolBar";

const Header = () => {
  return (
    <AppBar component={"header"} position="sticky">
      <Container maxWidth="xl">
        <ToolBar />
      </Container>
    </AppBar>
  );
};
export default Header;
