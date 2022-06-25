import React from "react";
import ProfileAvatar from "./ProfileAvatar";
import Stack from "@mui/material/Stack";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ProfileCard() {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
      <ProfileAvatar />
      <Stack direction="column" alignItems="flex-start" spacing={0.2}>
        <Stack direction="row" alignItems="center">
          <div style={{ fontSize: 18, fontWeight: 600 }}>TUCO'S TACOS</div>{" "}
          <BookmarkBorderOutlinedIcon />
        </Stack>
        <Rating
          defaultValue={3.5}
          size="medium"
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              width: 62,
              height: 30,
              backgroundColor: "#efaf6a",
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontSize: 12, mt: 0.7 }}>Spicy</Typography>
          </Box>
          <Box
            sx={{
              width: 62,
              height: 30,
              backgroundColor: "#efaf6a",
              borderRadius: 20,
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontSize: 12, mt: 0.7 }}>Savoury</Typography>
          </Box>
        </Stack>
        <div
          style={{
            fontSize: "12px",
            marginTop: "8px",
            textDecoration: "underline",
          }}
        >
          946 E 181st St, Bronx, NY 10460
        </div>
      </Stack>
    </Stack>
  );
}
