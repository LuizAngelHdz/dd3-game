/* eslint-disable no-undef */
import { Container, Grid, Typography } from "@mui/material";
import React from "react";

import { useStyles } from "./KeyboardStyles";

const Keyboard = ({ onClick }) => {
  const classes = useStyles();
  const letther = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const lether2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"];
  const lether3 = ["Enter", "z", "x", "c", "v", "b", "n", "m", "Del"];

  return (
    <Container maxWidth="sm" style={{ padding: "0.5vh", marginTop: "3vh" }}>
      <Grid container spacing={3} className={classes.content}>
        <Grid item md={12} style={{ display: "flex" }}>
          {letther.map((itemLether) => (
            <Typography
              className={classes.key}
              onClick={() => onClick(itemLether)}
            >
              {itemLether}
            </Typography>
          ))}
        </Grid>
        <Grid item md={12} style={{ display: "flex" }}>
          {lether2.map((itemLether) => (
            <Typography
              className={classes.key}
              onClick={() => onClick(itemLether)}
            >
              {itemLether}
            </Typography>
          ))}
        </Grid>
        <Grid item md={12} style={{ display: "flex" }}>
          {lether3.map((itemLether) => (
            <Typography
              className={classes.key}
              onClick={() => onClick(itemLether)}
            >
              {itemLether}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export { Keyboard };
