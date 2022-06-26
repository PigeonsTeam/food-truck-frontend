import * as React from "react";
import { Grid, Stack, Pagination } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import ProfileAvatar from "../../components/User/ProfileAvatar";
import RecommendedCard from "../../components/Recommended/RecommendedCard";
import { v1 as uuid } from "uuid";
import { Trucks } from "../../data/foodTrucks";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";

const BucketListPage = () => {
  const displayBucketLists = () => {
    const bucketList = [];
    Trucks.forEach((truck) => {
      if (truck.image !== undefined)
        bucketList.push(<RecommendedCard truck={truck} key={uuid()} />);
    });

    return bucketList;
  };

  const [starting, setStarting] = useState(4);
  const [position, setPosition] = useState(1);
  const [subArray, setSubArray] = useState(displayBucketLists().slice(0, 4));
  const [count, setCount] = useState(3);
  const [end, setEnd] = useState(8);
  const [prev, setPrev] = useState("");

  // 1 2 3 4 5 6 7 8 9
  const controlPagination = (e, pageNumber) => {
    const allTrucks = displayBucketLists();
    const allTrucksLength = allTrucks.length;

    const quotient = Math.floor(allTrucksLength / 4);
    const remainder = allTrucksLength % 4;

    if (count !== quotient + remainder) {
      setCount(quotient + remainder);
    }

    if (pageNumber > position) {
      let newEnd = end,
        newStart = starting;
      if (prev === "minus") {
        newStart = end;
        console.log(end);
        setStarting(newStart);
        if (end + 4 > allTrucksLength) {
          newEnd = 9;
          setEnd(newEnd);
        } else {
          newEnd = end + 4;
          setEnd(newEnd);
        }
      }
      console.log(newStart);
      console.log(newEnd);
      setSubArray(allTrucks.slice(newStart, newEnd));
      setStarting(newEnd);
      if (newEnd + 4 > allTrucksLength) {
        setEnd(9);
      } else {
        setEnd(end + 4);
      }
      setPrev("plus");
    } else {
      let newStart, newEnd;
      if (starting >= allTrucksLength && allTrucksLength % 4 !== 0) {
        newStart = allTrucksLength - remainder - 4;
        newEnd = allTrucksLength - remainder;
        setEnd(allTrucksLength - remainder);
        setStarting(allTrucksLength - remainder - 4);
      } else {
        let difference = 4;
        if (prev === "plus") {
          difference = 8;
        }
        newStart = starting - difference;
        newEnd = starting - (difference - 4);
        setEnd(newStart);
        setStarting(newEnd);
      }

      setSubArray(allTrucks.slice(newStart, newEnd));
      setPrev("minus");
    }
    setPosition(pageNumber);
  };

  return (
    <>
      <NavBar noSearchBar={true} />
      <Grid container spacing={2} justifyContent={"center"} p={4}>
        <Stack
          direction="column"
          spacing={2}
          justifyContent="center"
          style={{
            display: "flex",
            alignItems: "center",
            justfifyContent: "center",
            width: 130,
          }}
        >
          <ProfileAvatar />
          <div style={{ fontSize: 25, fontWeight: 800, textAlign: "center" }}>
            Jane's Bucket List
          </div>{" "}
        </Stack>
        <Stack spacing={2} p={2} direction="column">
          {subArray.map((recommendedCard) => recommendedCard)}
        </Stack>
        {/* <BucketListButtons /> */}
        <Pagination
          count={count}
          variant="outlined"
          shape="rounded"
          onChange={controlPagination}
        />
      </Grid>
      <Footer />
    </>
  );
};

export default BucketListPage;
