import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Return from "../../components/General/Return";
import SearchBar from "../../components/General/SearchBar";
import ProfileCard from "../../components/Profile/ProfileCard";
import Stack from "@mui/material/Stack";
import Hours from "../../components/Profile/Hours";
import About from "../../components/Profile/About";
import Menu from "../../components/Profile/Menu";
import Gallery from "../../components/Profile/Gallery";
import Review from "../../components/Profile/Review";
import MoreSimilar from "../../components/Profile/MoreSimilar";
import { reviewInfo } from "../../data/reviews";
import Footer from "../../components/Footer/Footer";

export default function ProfilePage() {
  return (
    <>
      <NavBar noSearchBar={false}/>
      <SearchBar isWide={false}></SearchBar>
      <Return />
      <Stack
        direction="column"
        spacing={3}
        alignItems="flex-start"
        sx={{ ml: 4 }}
      >
        <ProfileCard />
        <Hours />
        <About />
        <Menu />
      </Stack>
      <Stack direction="column" spacing={3} alignItems="center" sx={{ mt: 2, mb: '60px' }}>
        <Gallery />
        <Review reviews={reviewInfo.vendor} />
        <MoreSimilar />
      </Stack>
      <Footer />
    </>
  );
}
