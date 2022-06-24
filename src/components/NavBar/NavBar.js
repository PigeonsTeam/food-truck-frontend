import React from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <AppBar color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            color="black"
            sx={{ flexGrow: 1 }}
          >
            StreetDeets
          </Typography>
          <AccountCircleOutlinedIcon htmlColor="black" />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Container>
  );
};

export default NavBar;
