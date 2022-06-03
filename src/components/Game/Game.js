/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Keyboard } from "../Keyboard";
import { Header } from "../Header";

import { useStyles } from "./GameStyles";

const Game = () => {
  const classes = useStyles();
  let counter = 0;
  const [lethers, setlethers] = useState([]);
  const phrase = "PEDRO";
  //const [counter, setcounter] = useState(0);
  const fillArray = () => {
    setlethers([]);
    for (let index = 0; index < 5; index++) {
      lethers.push({ key: index + 1, value: ["", "", "", "", ""] });
    }
    setlethers([...lethers]);
  };
  useEffect(() => {
    if (lethers.length < 5) fillArray();
    window.addEventListener("keypress", anexar);
  }, []);

  const anexar = (e) => {
    updateValue(e.key);
  };
  const validatePhrase = (values) => {
    console.log("values", values);
  };
  const updateValue = async (value) => {
    const finded = lethers[counter].value.findIndex(
      (element) => element === ""
    );
    if (finded !== -1) {
      lethers[counter].value[finded] = value;
      setlethers([...lethers]);
      return;
    } else {
      counter = counter + 1;
      validatePhrase(lethers[counter - 1].value);
      updateValue(value);
    }
  };
  const validateLetger = (palabra) => {
    console.log("palabra---", palabra);
  };
  return (
    <Container
      maxWidth="sm"
      style={{
        padding: "1vh",
        //minHeight: "100vh",
      }}
    >
      <Header />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {phrase}
        {console.log("lethers---<", lethers, counter)}
        {lethers.map((item) => (
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            md={12}
          >
            {item.value.map((key, index) => (
              <Grid
                style={{ display: "flex", justifyContent: "center" }}
                item
                md={2}
              >
                <Typography
                  className={
                    index % 5 && counter !== 0
                      ? validateLetger(key)
                      : classes.letther
                  }
                  key={key}
                >
                  {key}
                </Typography>
              </Grid>
            ))}
          </Grid>
        ))}
        <Keyboard onClick={(e) => updateValue(e)} />
      </Grid>
    </Container>
  );
};

export { Game };
