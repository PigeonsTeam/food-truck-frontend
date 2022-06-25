import React from "react";
import SearchBar from "../../components/General/SearchBar";
import CustomButton from "../../components/General/Button";
import Stack from "@mui/material/Stack";
import Slider from "../../components/DistanceSlider/DistanceSlider";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import TopCard from "../../components/TopPicks/TopCard";
import Pagination from "@mui/material/Pagination";

export default function FilterPage() {
  const data = ["Sweet", "Savory", "Spicy", "Sour"];
  const [distance, setDistance] = useState(6);

  const handleSliderChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setDistance(newValue);
    }
  };
  return (
    <Stack direction="column" alignItems="center">
      <SearchBar isWide={true} />
      <Stack
        sx={{ mt: "20px" }}
        direction="row"
        justifyContent="center"
        spacing={2}
      >
        {data.map((flavour, index) => (
          <CustomButton key={index}>{flavour}</CustomButton>
        ))}
      </Stack>
      <Typography
        sx={{
          width: "250px",
          mt: "20px",
          fontSize: "13px",
          fontWeight: "700",
        }}
      >
        Distance
      </Typography>
      <Slider handleSliderChange={handleSliderChange}></Slider>
      <Typography sx={{ width: "250px", mt: "-12px", fontSize: "12px" }}>
        {distance + " mi"}
      </Typography>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        sx={{ mt: 2.5 }}
      >
        <TopCard />
        <TopCard />
      </Stack>
      <Stack spacing={2} direction="row" justifyContent="center">
        <TopCard />
        <TopCard />
      </Stack>
      <Pagination sx={{ mt: 2 }} count={5} shape="rounded" />
    </Stack>
  );
}
