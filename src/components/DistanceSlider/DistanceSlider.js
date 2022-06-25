import React from "react";
import Slider from "@mui/material/Slider";

export default function DistanceSlider(props) {
  return (
    <Slider
      size="small"
      defaultValue={6}
      aria-label="Small"
      sx={{ width: "250px", mt: "-10px" }}
      onChange={props.handleSliderChange}
      min={1}
      max={30}
    />
  );
}
