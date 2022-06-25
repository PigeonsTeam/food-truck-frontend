import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function Hours() {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      sx={{ fontSize: "12px" }}
    >
      <Box sx={{ mr: "-10px", fontWeight: 700 }}>Hours of Operation:</Box>
      <Stack direction="column">
        <Box>Mon - Fri: &nbsp;&nbsp;&nbsp;&nbsp;10:00am - 7:00pm</Box>
        <Box>Sat - Sun: &nbsp;&nbsp;&nbsp;&nbsp;11:00am - 9:00pm</Box>
      </Stack>
    </Stack>
  );
}
