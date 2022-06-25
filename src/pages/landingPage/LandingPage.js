import React from "react";
import Recommended from "../../components/Recommended/Recommended";
import TopPicks from "../../components/TopPicks/TopPicks";
import SearchBar from "../../components/General/SearchBar";
import NavBar from "../../components/NavBar/NavBar";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <SearchBar isWide={false} />
      <TopPicks />
      <Recommended />
    </>
  );
};

export default LandingPage;
