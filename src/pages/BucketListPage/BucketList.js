import * as React from "react";
import { Typography, Grid } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import BucketListButtons from "./BucketListButtons";

const BucketListPage = (isVisited) => {
  return (
    <>
      <NavBar />
      <Grid container spacing={2} alignItems={"center"} p={4}>
        <Grid item xs={6}>
          {/* to be replaced with user profile picture */}
          <AccountCircleOutlined xs={6} sx={{ fontSize: 150 }} />
        </Grid>
        <Grid item xs={6}>
          <Typography
            xs={6}
            variant="h5"
            component="div"
            color="black"
            sx={{ flexGrow: 1 }}
          >
            Bucket List
          </Typography>
        </Grid>
        <BucketListButtons />
        {/* <Pagination count={6} variant="outlined" shape="rounded" /> */}
      </Grid>
    </>
  );
};

export default BucketListPage;
