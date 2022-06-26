import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReviewCards from "./ReviewCards";
import { v1 as uuid } from "uuid";

export default function Review(props) {
  const displayReviews = () => {
    const reviews = [];
    props.reviews.reviews.forEach((review) => {
      reviews.push(<ReviewCards review={review} key={uuid()} />);
    });

    return reviews;
  };

  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      sx={{
        backgroundColor: props.reviews.color,
        width: "90%",
        borderRadius: 5,
        pl: 2,
        pt: 1,
      }}
    >
      <Typography sx={{ mb: 2, fontWeight: 700 }}>
        {props.reviews.reviewType} Reviews
      </Typography>
      <Box>
        <Stack spacing={1} direction="column">
          {displayReviews().map((reviewCard) => reviewCard)}
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
