import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const TopCard = () => {
  return (
    <Card sx={{ minWidth: 130, height: 240 }}>
      <Box pt={2} sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          component="img"
          image="sushiPic.jpeg"
          sx={{ width: 90, height: 90 }}
        />
      </Box>
      <Box px={.5} pb={2}>
        <CardContent sx={{ textAlign: "center", padding: 0 }}>
          <Typography fontSize={16} sx={{ fontWeight: 700 }}>
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography fontSize={14} variant="p">
            Lorem ipsum dol or sit amet, conse ctetur adipiscing
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default TopCard;
