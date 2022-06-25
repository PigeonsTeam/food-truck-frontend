import { Grid } from "@mui/material";
import CustomButton from "../../components/General/Button";

const BucketListButtons = () => {
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
    siblingBtn.classList.remove("active");
  };

  return (
    <>
      <Grid container pr={4} pl={4} justifyContent={"center"}>
        <Grid item xs={4} justifyContent={"center"} onClick={changeActive}>
          <CustomButton children={"To Visit"} />
        </Grid>
        <Grid item xs={3} justifyContent={"center"} onClick={changeActive}>
          <CustomButton children={"Visited"} />
        </Grid>
      </Grid>
    </>
  );
};

export default BucketListButtons;
