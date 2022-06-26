import React from "react";
import Recommended from "../../components/Recommended/Recommended";
import TopPicks from "../../components/TopPicks/TopPicks";
import SearchBar from "../../components/General/SearchBar";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <NavBar noSearchBar={false} />
      <TopPicks />
      <Recommended />
      <Footer />
    </>
  );
};

export default LandingPage;
