import React from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "white" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <AccountCircleOutlinedIcon htmlColor="black" sx={{ mr: 2 }} />
          <Link to="/" underline="none" component={RouterLink}>
            <Typography
              variant="h6"
              component="div"
              color="black"
              sx={{ flexGrow: 1, fontWeight: 700, fontStyle: 'italic' }}
            >
              StreetDeets
            </Typography>
          </Link>
          <SettingsOutlinedIcon htmlColor="black" sx={{ fontSize: 26 }} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Container>
  );
};

export default NavBar;
