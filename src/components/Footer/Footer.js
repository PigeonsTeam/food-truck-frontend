import { AppBar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{ top: "auto", bottom: 0, bgcolor: "#EEEDF3", height: "200px" }}
    >
      <Stack spacing={1} mt={"21px"} alignItems="center">
        <Typography fontSize="18px" color="#000000" textAlign="center" lineHeight="22px">
          Join Millions of Foodies <br /> on Peckish
        </Typography>
        <Button
          sx={{ width: "185px", height: "32px", backgroundColor: "#39315F", borderRadius: '6px', color: '#FFFFFF', fontWeight: '700' }}
        >
          Join the Community
        </Button>
      </Stack>
        <Divider variant="middle" sx={{ color: '#211C36', mt: "18px", border: "1px solid #211C36;" }} />
    </AppBar>
  );
};

export default Footer;
