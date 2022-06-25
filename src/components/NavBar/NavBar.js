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
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "white" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
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
