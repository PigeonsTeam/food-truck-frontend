import * as React from "react";
import { Typography, Grid, Stack, Pagination } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import CustomButton from "../../components/General/Button";
import RecommendedCard from "../../components/Recommended/RecommendedCard";

const BucketListPage = () => {
  return (
    <>
      <NavBar />
      <Grid container spacing={2} alignItems={"center"} p={4}>
        <Grid item xs={6}>
          <AccountCircleOutlined item xs={6} sx={{ fontSize: 150 }} />
        </Grid>
        <Grid item xs={6}>
          <Typography
            item
            xs={6}
            variant="h5"
            component="div"
            color="black"
            sx={{ flexGrow: 1 }}
          >
            Bucket List
          </Typography>
        </Grid>
        <Grid container pr={4} pl={4} justifyContent={"center"}>
          <Grid item xs={4} justifyContent={"center"}>
            <CustomButton children={"To Visit"} />
          </Grid>
          <Grid item xs={3} justifyContent={"center"}>
            <CustomButton children={"Visited"} />
          </Grid>
        </Grid>
        <Stack spacing={2} p={2} direction="column">
          {/* bucket list template for now */}
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
        </Stack>
        <Pagination count={6} variant="outlined" shape="rounded" />
      </Grid>
    </>
  );
};

export default BucketListPage;
