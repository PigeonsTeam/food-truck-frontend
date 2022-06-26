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
    <Link
      fontSize={"10px"}
      fontWeight={700}
      color="#000000"
      underline="hover"
      key="1"
    >
      About
    </Link>,
    <Link
      fontSize={"10px"}
      fontWeight={700}
      color="#000000"
      underline="hover"
      key="2"
    >
      Vendors
    </Link>,
    <Link
      fontSize={"10px"}
      fontWeight={700}
      color="#000000"
      underline="hover"
      key="3"
    >
      Contact Us
    </Link>,
  ];

  return (
    <AppBar
      position="static"
      sx={{ top: "auto", bottom: 0, bgcolor: "#EEEDF3", height: "200px", }}
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
        <Breadcrumbs
          separator="-"
          aria-label="breadcrumb"
          sx={{ margin: "5px 0 0 20px" }}
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Box ml={"20px"}>
          <Typography fontSize="8px" color="#000000" fontWeight={400}>
            2022 Peckish. All rights reserved. Privacy Policy - Terms of
            Conditions <br />
            FreyHacks Hackathon
          </Typography>
        </Box>
      </Stack>
    </AppBar>
  );
};

export default Footer;
