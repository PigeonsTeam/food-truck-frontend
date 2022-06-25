import React from "react";

export default function Menu() {
  const data = ["Tacos", "Carnitas", "Skewers", "Mangonada"];
  return (
    <div style={{ fontSize: "12px", width: "90%" }}>
      <span style={{ fontWeight: 700 }}>Menu:</span>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "2px" }}>
        {data.map((menu, index) => (
          <li style={{ display: "inline", marginRight: "10px" }} key={index}>
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
}
