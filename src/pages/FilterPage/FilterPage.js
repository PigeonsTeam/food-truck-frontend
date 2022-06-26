import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Slider from "../../components/DistanceSlider/DistanceSlider";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import TopCard from "../../components/TopPicks/TopCard";
import Pagination from "@mui/material/Pagination";
import NavBar from "../../components/NavBar/NavBar";
import { FilterTrucks } from "../../data/foodTrucks";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Footer from "../../components/Footer/Footer";

const theme = createTheme({
  palette: {
    Sweet: {
      main: "#ea758e",
    },
    Savory: {
      main: "#d36617",
    },
    Spicy: {
      main: "#db2a13",
    },
    Sour: {
      main: "#ffa903",
    },
    Temp: {
      main: "black",
    },
  },
});

export default function FilterPage() {
  const data = [
    { name: "Sweet", color: "#ea758e" },
    { name: "Savory", color: "#d36617" },
    { name: "Spicy", color: "#db2a13" },
    { name: "Sour", color: "#ffa903" },
  ];
  const [distance, setDistance] = useState(6);
  const [flavor, setFlavor] = useState("Sweet");

  const handleSliderChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setDistance(newValue);
    }
  };

  const handleButtonChange = (event) => {
    setFlavor(event.currentTarget.value);
  };

  const bgc = {
    Sweet: "#fadde3",
    Savory: "#f5cca0",
    Spicy: "#e8aca5",
    Sour: "#f2d6a0",
  };

  const color = {
    Sweet: "#681a2a",
    Savory: "#08070d",
    Spicy: "#57423F",
    Sour: "#4E4637",
  };
  return (
    <>
      <NavBar></NavBar>
      <Stack direction="column" alignItems="center" sx={{ mt: "55px" }}>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <ThemeProvider theme={theme}>
            {data.map((flavour, index) => (
              <Button
                variant="contained"
                color={flavour.name}
                onClick={handleButtonChange}
                key={index}
                size="small"
                value={flavour.name}
                sx={{
                  borderRadius: "20px",
                  backgroundColor: flavour.color,
                  fontWeight: "600",
                  color: "black",
                  fontSize: "12px",
                }}
              >
                {flavour.name}
              </Button>
            ))}
          </ThemeProvider>
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
          sx={{
            mt: "20px",
            backgroundColor: bgc[flavor],
            pt: "20px",
            pb: "20px",
            width: "100%",
          }}
          direction="column"
          alignItems="center"
          spacing={2.2}
        >
          <Box
            sx={{
              textAlign: "center",
              fontSize: "26px",
              fontWeight: 700,
              color: color[flavor],
            }}
          >
            {flavor.toUpperCase()}
          </Box>
          <Grid
            container
            justifyContent="space-evenly"
            rowSpacing={3}
            sx={{ mt: 2 }}
          >
            {FilterTrucks[flavor].map((truck, index) => {
              return <TopCard truck={truck} key={index} />;
            })}
          </Grid>
          <Pagination sx={{ mt: 2 }} size="small" count={5} shape="rounded" />
        </Stack>
      </Stack>
      <Footer></Footer>
    </>
  );
}
