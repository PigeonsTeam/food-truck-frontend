import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import TopCard from "./TopCard";

const TopPicks = () => {
  return (
    <Box pl={2} pb={1} className="top-picks">
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
        <TopCard />
        <TopCard />
        <TopCard />
      </Stack>
    </Box>
  );
};

export default TopPicks;
