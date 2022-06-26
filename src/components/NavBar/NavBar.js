import React from "react";
import {
  AppBar,
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import SearchBar from "../General/SearchBar";

const NavBar = ({ noSearchBar }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "white" }}>
        <Toolbar
          sx={{ justifyContent: "space-between", height: "100px", pt: "10px" }}
        >
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            size="large"
            edge="start"
            aria-label="menu"
          >
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
            pb: !noSearchBar ? "20px" : "0px",
          }}
        >
          {!noSearchBar ? <SearchBar isWide={false} /> : <></>}
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ height: !noSearchBar ? "150px" : "130px" }} />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        marginThreshold={0}
        PaperProps={{
          style: {
            width: "100%",
            maxWidth: "100%",
            left: 0,
            right: 0,
            color: "#000000",
            backgroundColor: "#E7F3F3",
          },
        }}
      >
        <MenuItem
          sx={{ justifyContent: "center", fontSize: "26px", fontWeight: 700 }}
          onClick={handleClose}
        >
          Profile
        </MenuItem>
        <Divider
          variant="middle"
          sx={{ color: "#5AAAAC", mt: "18px", border: "1px solid #5AAAAC;" }}
        />
        <MenuItem
          sx={{ justifyContent: "center", fontSize: "26px", fontWeight: 700 }}
          onClick={handleClose}
        >
          My account
        </MenuItem>
        <Divider
          variant="middle"
          sx={{ color: "#5AAAAC", mt: "18px", border: "1px solid #5AAAAC;" }}
        />
        <MenuItem
          sx={{ justifyContent: "center", fontSize: "26px", fontWeight: 700 }}
          onClick={handleClose}
        >
          Logout
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default NavBar;
