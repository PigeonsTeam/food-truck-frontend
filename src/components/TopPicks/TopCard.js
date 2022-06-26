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

const TopCard = (props) => {
  return (
    <Link to="/profile" underline="none" component={RouterLink}>
      <Box mb={1} sx={{ textAlign: "center" }}>
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
              image={props.truck.image}
              sx={{ width: 110, height: 90 }}
            />
          </Box>
          <Box px={0.5} pb={2}>
            <CardContent sx={{ paddingLeft: 2, paddingRight: 2 }}>
              <Typography fontSize={14} sx={{ fontWeight: "700", mt: "-10px" }}>
                {props.truck.name}
              </Typography>
              <Typography
                fontSize={14}
                variant="p"
                sx={{ textAlign: "justify" }}
              >
                {props.truck.shortDescription}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Link>
  );
};

export default TopCard;
