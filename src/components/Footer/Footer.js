import {
  AppBar,
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      MUI
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Core
    </Link>,
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>,
  ];

  return (
    <AppBar
      position="static"
      sx={{ top: "auto", bottom: 0, bgcolor: "#EEEDF3", height: "200px" }}
    >
      <Stack spacing={1} mt={"21px"} alignItems="center">
        <Typography
          fontSize="18px"
          color="#000000"
          textAlign="center"
          lineHeight="22px"
        >
          Join Millions of Foodies <br /> on Peckish
        </Typography>
        <Button
          sx={{
            width: "185px",
            height: "32px",
            backgroundColor: "#39315F",
            borderRadius: "6px",
            color: "#FFFFFF",
            fontWeight: "700",
          }}
        >
          Join the Community
        </Button>
      </Stack>
      <Divider
        variant="middle"
        sx={{ color: "#211C36", mt: "18px", border: "1px solid #211C36;" }}
      />
      <Stack>
        <Breadcrumbs separator="-" aria-label="breadcrumb" sx={{ margin: "5px 0 0 16px" }}>
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </AppBar>
  );
};

export default Footer;
