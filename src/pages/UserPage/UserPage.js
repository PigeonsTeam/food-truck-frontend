import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Return from "../../components/General/Return";
import ProfileCard from "../../components/User/ProfileCard";
import Stack from "@mui/material/Stack";
import Gallery from "../../components/Profile/Gallery";
import Review from "../../components/Profile/Review";
import { reviewInfo } from "../../data/reviews";
import Footer from "../../components/Footer/Footer";

export default function ProfilePage() {
  return (
    <>
      <NavBar></NavBar>
      <Return />
      <Stack
        direction="column"
        spacing={3}
        alignItems="flex-start"
        sx={{ ml: 4 }}
      >
        <ProfileCard />
        <Review reviews={reviewInfo.customer} />
      </Stack>
      <Stack direction="column" spacing={3} alignItems="center" sx={{ mt: 2 }}>
        <Gallery />
      </Stack>
      <Footer></Footer>
    </>
  );
}
