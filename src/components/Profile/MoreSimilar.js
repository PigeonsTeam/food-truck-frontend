import React from "react";
import { Stack, Typography } from "@mui/material";
import SimilarCards from "./SimilarCards";

export default function MoreSimilar() {
  const data = [
    { name: "Souvlaki Truck", img: "souvlaki-truck.jpg" },
    { name: "Falal King", img: "falal-king.jpg" },
    { name: "Via Brasil", img: "via-brasil.jpg" },
  ];
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
      <Typography sx={{ mb: 2, fontWeight: 700 }}>More Like This</Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "95%" }}
      >
        {data.map((similar, index) => (
          <SimilarCards key={index} name={similar.name} imgSrc={similar.img} />
        ))}
      </Stack>
    </Stack>
  );
}
