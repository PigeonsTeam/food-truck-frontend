import React from "react";
import {
  AppBar,
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import SearchBar from "../General/SearchBar";

const NavBar = ({ noSearchBar }) => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "white" }}>
        <Toolbar
          sx={{ justifyContent: "space-between", height: "100px", pt: "10px" }}
        >
          <IconButton size="large" edge="start" aria-label="menu">
            <MenuIcon sx={{ fontSize: "33px", color: "#000000" }} />
          </IconButton>
          <Link to="/" underline="none" component={RouterLink}>
            <Box component="img" sx={{}} alt="logo image" src="logo.png"></Box>
          </Link>
          <Link to="/bucketList" underline="none" component={RouterLink}>
            <AccountCircleOutlinedIcon
              sx={{ fontSize: "33px" }}
              htmlColor="black"
            />
          </Link>
        </Toolbar>
        <Divider
          variant="middle"
          sx={{ color: "#211C36", border: "1px solid #211C36;", mt: "-20px" }}
        />
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            height: !noSearchBar ? "40px" : "0px",
            pb: !noSearchBar ?  "20px" : '0px',
          }}
        >
          { !noSearchBar ? <SearchBar isWide={false} /> : <></> }
          
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ height: !noSearchBar ? "150px" : '130px' }} />
    </Container>
  );
};

export default NavBar;
