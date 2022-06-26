import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import RecommendedCard from "./RecommendedCard";
import { Trucks } from "../../data/foodTrucks";
import { v1 as uuid } from "uuid";

const Recommended = () => {
  const displayRecommended = () => {
    const recommended = [];
    Trucks.forEach((truck) => {
      if (!truck.topPick && truck.image !== undefined)
        recommended.push(<RecommendedCard truck={truck} key={uuid()} />);
    });

    return recommended;
  };

  return (
    <Box px={2} pb={2}>
      <Typography variant="h5" my={2} sx={{ fontWeight: 700 }}>
        Recommended For You
      </Typography>
      <Stack spacing={2} direction="column">
        {displayRecommended().map((recommendedCard) => recommendedCard)}
      </Stack>
    </Box>
  );
};

export default Recommended;
