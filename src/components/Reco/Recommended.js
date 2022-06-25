import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import RecommendedCard from "./RecommendedCard";

const Recommended = () => {
  return (
    <Box px={2} pb={2}>
      <Typography variant="h5" my={2} sx={{ fontWeight: 700 }}>
        Recommended For You
      </Typography>
      <Stack spacing={2} direction="column">
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />


      </Stack>
    </Box>
  );
};

export default Recommended;
