import React from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Link } from "react-router-dom";

export default function Return() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        textDecoration: "underline",
        marginLeft: "10px",
        marginTop: "16px",
      }}
    >
      <Link
        to="/"
        style={{
          color: "black",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 18 }} />
        <span style={{ fontSize: "13px" }}>Back</span>
      </Link>
    </div>
  );
}
