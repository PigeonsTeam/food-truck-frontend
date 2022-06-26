import React from "react";
import ProfileAvatar from "./ProfileAvatar";
import Stack from "@mui/material/Stack";

export default function ProfileCard() {
  return (
    <Stack
      direction="column"
      spacing={2}
      justifyContent="center"
      alignSelf={"center"}
      sx={{ mt: 3 }}
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ProfileAvatar />
      <Stack direction="column" alignItems="flex-start" spacing={0.2}>
        <Stack direction="column" alignItems="center">
          <div style={{ fontSize: 18, fontWeight: 600 }}>Jane Bird</div>{" "}
          <div style={{ fontSize: 12, fontWeight: 100 }}>
            "Being a foodie is a lifestyle"
          </div>{" "}
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#524687",
              color: "white",
              borderRadius: "6px",
              border: "none",
              height: "32px",
              width: "123px",
              marginTop: "30px",
              fontSize: 18,
              fontWeight: 600,
              padding: "21px 7px",
            }}
          >
            Bucket List
          </button>
        </Stack>
      </Stack>
    </Stack>
  );
}
