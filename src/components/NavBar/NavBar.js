import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            StreetDeets
          </Typography>
          <AccountCircle />
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
