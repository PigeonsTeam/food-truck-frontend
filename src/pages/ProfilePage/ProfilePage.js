import React from "react";
import NavBar from "../../components/NavBar/NavBarWithSystem";
import Return from "../../components/General/Return";
import SearchBar from "../../components/General/SearchBar";

export default function ProfilePage() {
  return (
    <>
      <NavBar></NavBar>
      <Return></Return>
      <SearchBar isWide={true}></SearchBar>
    </>
  );
}
