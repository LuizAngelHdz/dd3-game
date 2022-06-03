/* eslint-disable no-undef */
import { makeStyles } from "@mui/styles";

const properties = {
  padding: "16px 25px",
  fontSize: "15px !important",
  margin: "11px !important",
};
const useStyles = makeStyles((theme) => ({
  letther: {
    ...properties,
    border: "1px solid",
  },
  correctletther: {
    ...properties,
    backgroundColor: theme.palette.primary.main,
  },
  incorrectLetther: {
    ...properties,
    backgroundColor: "#CEB02C",
  },
  noLetter: {
    ...properties,
    backgroundColor: "#939B9F",
  },
  containerLether: {
    display: "flex",
  },
  text: {
    fontSize: "17px !important",
    textAlign: "left",
    margin: "6px !important",
  },
}));

export { useStyles };
