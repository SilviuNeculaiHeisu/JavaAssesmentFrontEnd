import { Grid, Switch } from "@mui/material";
import React from "react";

const DisplaySwitch = ({ isTableDisplayed, setIsTableDisplayed }) => {
  const handleChange = () => {
    setIsTableDisplayed((prev) => !prev);
  };
  return (
    <Grid container justifyContent={"flex-end"}>
      {" "}
      <Switch
        checked={isTableDisplayed}
        value={isTableDisplayed}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </Grid>
  );
};

export default DisplaySwitch;
