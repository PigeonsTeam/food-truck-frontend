import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import TopCard from "./TopCard";
import { Trucks } from "../../data/foodTrucks";
import { v1 as uuid } from "uuid";

const TopPicks = () => {
  const displayTopPicks = () => {
    const topPicks = [];
    Trucks.forEach((truck) => {
      if (truck.topPick) topPicks.push(<TopCard truck={truck} key={uuid()} />);
    });

    return topPicks;
  };
  return (
    <Box pl={2} pb={1} mt={2} className="top-picks">
      <Typography variant="h5" my={2} sx={{ fontWeight: 700 }}>
        Top Picks
      </Typography>
      <Stack
        spacing={2}
        direction="row"
        sx={{ overflow: "auto" }}
        style={{
          overflowX: "scroll",
          scrollbarWidth: "none",
        }}
      >
        {displayTopPicks().map((topCard) => topCard)}
      </Stack>
    </Box>
  );
};

export default TopPicks;
