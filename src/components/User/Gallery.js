import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      sx={{
        backgroundColor: "#fae6d0",
        width: "90%",
        borderRadius: 5,
        pl: 2,
        pt: 1,
      }}
    >
      <Typography sx={{ mb: -1, fontWeight: 700 }}>Gallery</Typography>
      <ImageList
        sx={{ width: "95%", height: 250 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt="food"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
}

const itemData = [
  {
    img: "./food1.jpg",
    rows: 2,
    cols: 2,
  },
  {
    img: "./food2.jpg",
    cols: 2,
  },
  {
    img: "./food3.jpg",
    cols: 2,
  },
  {
    img: "./food7.jpg",
  },
  {
    img: "./food6.jpg",
  },
  {
    img: "./food5.jpg",
    cols: 2,
    rows: 2,
  },
  {
    img: "./food4.jpg",
    cols: 2,
  },
];
