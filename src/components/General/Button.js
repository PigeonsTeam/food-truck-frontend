import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    buttonSelected: {
      main: "#aaaaaa",
    },
  },
});

export default function CustomButton(props) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        size="small"
        variant="contained"
        color="buttonSelected"
        sx={{
          borderRadius: "20px",
          backgroundColor: "#d9d8d8",
          fontWeight: "600",
          color: "black",
          fontSize: "12px",
        }}
      >
        {props.children}
      </Button>
    </ThemeProvider>
  );
}
