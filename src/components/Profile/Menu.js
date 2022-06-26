import React from "react";

export default function Menu() {
  return (
    <div style={{ fontSize: "12px", width: "90%" }}>
      <span
        style={{
          fontWeight: 700,
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        Click Here for Menu
      </span>
      &nbsp;&nbsp;&nbsp; (Accepts Cash + Venmo)
    </div>
  );
}
