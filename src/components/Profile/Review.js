import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReviewCards from "./ReviewCards";

export default function Review() {
  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      sx={{
        backgroundColor: "#fae6d0",
        width: "90%",
        borderRadius: 5,
        pl: 2,
        pt: 1,
      }}
    >
      <Typography sx={{ mb: 2, fontWeight: 700 }}>Customer Reviews</Typography>
      <Box>
        <Stack spacing={1} direction="column">
          <ReviewCards
            imgSrc={"chicken.jpg"}
            description="The carnitas tacos were amazing!"
          />
          <ReviewCards
            imgSrc={"toast.jpg"}
            description="I love coming here after school
and grabbing some quick eats"
          />
          <ReviewCards
            imgSrc={"./earth.jpg"}
            description="First time here and have to say
I will be back to try more!"
          />
        </Stack>
      </Box>
      <Stack
        direction="row"
        justifyContent="flex-end"
        sx={{
          width: "95%",
          fontSize: "14px",
          textDecoration: "underline",
          margin: "14px 0 14px 0",
        }}
      >
        <div style={{ cursor: "pointer" }}>View More</div>
      </Stack>
    </Stack>
  );
}
