import { Box, Card, CardContent, CardMedia, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const TopPicks = () => {
  return (
    <Box pl={2}>
      <h2>Top Picks</h2>
      <Stack spacing={2} direction="row">
        <Card sx={{ maxWidth: 140, maxHeight: 240 }}>
          <CardMedia
            component="img"
            image="sushiPic.jpeg"
            sx={{ width: 90, height: 90 }}
          />
          <CardContent>
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>Lorem ipsum dol or sit amet, conse ctetur adipiscing.</p>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default TopPicks;
