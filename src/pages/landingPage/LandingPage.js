import React from "react";
import Recommended from "../../components/Recommended/Recommended";
import TopPicks from "../../components/TopPicks/TopPicks";
import SearchBar from "../../components/General/SearchBar";

const LandingPage = () => {
  return (
    <>
      <SearchBar isWide={false} />
      <TopPicks />
      <Recommended />
    </>
  );
};

export default LandingPage;
