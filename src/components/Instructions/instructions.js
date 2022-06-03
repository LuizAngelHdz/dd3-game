/* eslint-disable no-undef */
import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

import { useStyles } from "./instructionsStyles";

const Instructioins = ({ close }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" style={{ padding: "1vh" }}>
      <Grid container style={{ borderRadius: "15px", padding: "0.5vh" }}>
        <Grid item md={12}>
          <Typography
            style={{ fontSize: "35px", fontWeight: 800, textAlign: "center" }}
          >
            Còmo jugar
          </Typography>
          <Typography className={classes.text}>
            Adivina la palabra oculta en cinco intentos.
          </Typography>
          <Typography className={classes.text}>
            Cada intento debe ser una palabra válida de 5 letras.
          </Typography>
          <Typography className={classes.text}>
            Después de cada intento el color de las letras cambia para mostrar
            qué tan cerca estás de acertar la palabra.
          </Typography>
          <Typography style={{ fontSize: "19px", fontWeight: 800 }}>
            Ejemplos
          </Typography>
        </Grid>
        <Grid item md={12} className={classes.containerLether}>
          <Typography className={classes.correctletther}>G</Typography>
          <Typography className={classes.letther}>A</Typography>
          <Typography className={classes.letther}>T</Typography>
          <Typography className={classes.letther}>O</Typography>
          <Typography className={classes.letther}>S</Typography>
        </Grid>
        <Typography className={classes.text}>
          La letra G està en la palabra y en la posiciòn correcta.
        </Typography>
        <Grid item md={12} className={classes.containerLether}>
          <Typography className={classes.letther}>V</Typography>
          <Typography className={classes.letther}>O</Typography>
          <Typography className={classes.incorrectLetther}>C</Typography>
          <Typography className={classes.letther}>A</Typography>
          <Typography className={classes.letther}>L</Typography>
        </Grid>
        <Typography className={classes.text}>
          La letra C està en la palabra Pero en la posiciòn incorrecta.
        </Typography>
        <Grid item md={12} className={classes.containerLether}>
          <Typography className={classes.letther}>C</Typography>
          <Typography className={classes.letther}>A</Typography>
          <Typography className={classes.letther}>N</Typography>
          <Typography className={classes.letther}>T</Typography>
          <Typography className={classes.noLetter}>O</Typography>
        </Grid>
        <Typography className={classes.text}>
          La letra O no està en la palabra.
        </Typography>

        <Grid item md={12}>
          <Typography className={classes.text}>
            Puede haber letras repetidas. Las piastas son independientes para
            cada letra.
          </Typography>
          <Typography>¡Una palabra nueva cada 5 minutos!</Typography>
        </Grid>
        <Grid
          item
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1vh",
          }}
        >
          <Button variant="contained" color="success" onClick={() => close()}>
            !JUGAR¡
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Instructioins };
