import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";

import Fab from "@mui/material/Fab";
import { styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import QrCode2Icon from "@mui/icons-material/QrCode2";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function BottomAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        style={{ background: "white" }}
        sx={{ top: "auto", bottom: 0, position: "fixed" }}
      >
        <Toolbar>
          <IconButton aria-label="open drawer">
            <SearchIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <QrCode2Icon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton>
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
