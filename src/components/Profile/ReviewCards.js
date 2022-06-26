import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Stack from "@mui/material/Stack";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function ReviewCards(props) {
  const imgSrc = props.review.image;
  const description = props.review.review;
  const name = props.review.name;
  return (
    <Box
      sx={{
        width: "95%",
      }}
    >
      <Card
        sx={{
          minWidth: 300,
          height: 125,
          borderRadius: 2,
          boxShadow: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box py={2} pl={2}>
          <CardMedia
            component="img"
            image={imgSrc}
            sx={{ width: 90, height: 90 }}
          />
        </Box>
        <Box pt={2} px={1}>
          <CardContent sx={{ padding: 0 }}>
            <Stack direction="row" alignItems="center">
              <Typography fontSize={16} sx={{ fontWeight: 700, mr: 1 }}>
                {name}
              </Typography>
              <StarIcon sx={{ fontSize: "14px" }}></StarIcon>
              <StarIcon sx={{ fontSize: "14px" }}></StarIcon>
              <StarIcon sx={{ fontSize: "14px" }}></StarIcon>
              <StarIcon sx={{ fontSize: "14px" }}></StarIcon>
              <StarBorderIcon sx={{ fontSize: "14px" }}></StarBorderIcon>
            </Stack>
            <Typography fontSize={14} variant="p">
              {description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
