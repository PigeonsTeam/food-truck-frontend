import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import CustomButton from "../../components/General/Button";
import RecommendedCard from "../../components/Recommended/RecommendedCard";
import { v1 as uuid } from "uuid";
import { Trucks } from "../../data/foodTrucks";

const BucketListButtons = () => {
  const displayBucketLists = (isVisited) => {
    const bucketList = [];
    Trucks.forEach((truck) => {
      if (truck.visited === isVisited && truck.image !== undefined)
        bucketList.push(<RecommendedCard truck={truck} key={uuid()} />);
    });

    return bucketList;
  };

  const [currBucketList, setCurrBucketList] = useState(
    displayBucketLists(true)
  );

  const changeActive = (e) => {
    const btn = e.target;
    const btnContainer = btn.parentNode;
    const siblingContainer =
      btnContainer.nextSibling === null
        ? btnContainer.previousSibling
        : btnContainer.nextSibling;
    const siblingBtn = siblingContainer.childNodes[0];

    if (btn.classList.contains("active")) {
      return;
    }

    btn.classList.add("active");

    if (btn.textContent === "Visited") {
      setCurrBucketList(displayBucketLists(true));
    } else {
      setCurrBucketList(displayBucketLists(false));
    }

    siblingBtn.classList.remove("active");
  };

  return (
    <>
      <Grid container pr={4} pl={4} justifyContent={"center"}>
        <Grid item xs={4} justifyContent={"center"} onClick={changeActive}>
          <CustomButton children={"To Visit"} />
        </Grid>
        <Grid item xs={3} justifyContent={"center"} onClick={changeActive}>
          <CustomButton children={"Visited"} className="active" />
        </Grid>
      </Grid>
      <Stack spacing={2} p={2} direction="column">
        {currBucketList.map((recommendedCard) => recommendedCard)}
      </Stack>
    </>
  );
};

export default BucketListButtons;
