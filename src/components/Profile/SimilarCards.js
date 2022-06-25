import React from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

export default function ReviewCards(props) {
  const { name, imgSrc } = props;
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ mb: 3 }}
    >
      <Card>
        <CardMedia
          component="img"
          image={imgSrc}
          sx={{ width: 90, height: 90, textAlign: "center" }}
        />
      </Card>
      <Stack direction="row" alignItems="center">
        <Typography fontSize={14}>{name}</Typography>
        <BookmarkBorderOutlinedIcon sx={{ fontSize: "16px" }} />
      </Stack>
    </Stack>
  );
}
