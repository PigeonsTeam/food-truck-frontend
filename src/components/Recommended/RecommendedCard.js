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

const RecommendedCard = (props) => {
  return (
    <Link to="/profile" underline="none" component={RouterLink}>
      <Box mb={1}>
        <Card
          sx={{
            minWidth: 300,
            height: 125,
            borderRadius: 2,
            boxShadow: 3,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box py={2} pl={2}>
            <CardMedia
              component="img"
              image={props.truck.image}
              sx={{ width: 90, height: 90 }}
            />
          </Box>
          <Box pt={2} px={1}>
            <CardContent sx={{ padding: 0 }}>
              <Typography fontSize={16} sx={{ fontWeight: 700 }}>
                {props.truck.name}
              </Typography>
              <Typography fontSize={14} variant="p">
                {props.truck.shortDescription}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Link>
  );
};

export default RecommendedCard;
