import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const RecommendedCard = () => {
  return (
    <Box mb={1}>
    <Card sx={{ minWidth: 300, height: 125, borderRadius: 2, boxShadow: 3, display: 'flex', flexDirection: 'row' }}>
      <Box py={2} pl={2}>
        <CardMedia
          component="img"
          image="sushiPic.jpeg"
          sx={{ width: 90, height: 90 }}
        />
      </Box>
      <Box pt={2} px={1} >
        <CardContent sx={{ padding: 0 }}>
          <Typography fontSize={16} sx={{ fontWeight: 700 }}>
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography fontSize={14} variant="p">
            Lorem ipsum dol or sit amet, conse ctetur adipiscing
          </Typography>
        </CardContent>
      </Box>
    </Card>
    </Box>
  );
};

export default RecommendedCard;