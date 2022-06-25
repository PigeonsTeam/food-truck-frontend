import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const TopCard = () => {
  return (
    <Link to="/profile" underline="none" component={RouterLink}>
      <Box mb={1}>
        <Card
          sx={{
            minWidth: 130,
            maxWidth: 150,
            height: 240,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Box pt={2} sx={{ display: "flex", justifyContent: "center" }}>
            <CardMedia
              component="img"
              image="sushiPic.jpeg"
              sx={{ width: 90, height: 90 }}
            />
          </Box>
          <Box px={0.5} pb={2}>
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
      </Box>
    </Link>
  );
};

export default TopCard;
