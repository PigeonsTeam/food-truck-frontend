import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  },
});

export default function CustomButton(props) {
  let backgroundColor = props.color;
  return (
    <ThemeProvider theme={theme}>
      <Button
        size="small"
        variant="contained"
        color={props.color}
        sx={{
          borderRadius: "20px",
          backgroundColor,
          fontWeight: "600",
          color: "black",
          fontSize: "12px",
        }}
        onClick={props.handleChange}
      >
        {props.value}
      </Button>
    </ThemeProvider>
  );
}
