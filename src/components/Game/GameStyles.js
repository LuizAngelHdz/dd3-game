/* eslint-disable no-undef */
import { makeStyles } from "@mui/styles";

const properties = (theme) => {
  console.log("--->", theme);
  return {
    minHeight: "76px",
    minWidth: "76px",
    fontSize: "35px !important",
    margin: "11px !important",
    backgroundColor: `${theme.palette.primary.bg}!important`,
    textTransform: "uppercase",
    fontWeight: "800 !important",
    color: `${theme.palette.primary.color}!important`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
};
const useStyles = makeStyles((theme) => ({
  letther: {
    ...properties(theme),
    border: "1px solid",
  },
  correctletther: {
    ...properties(theme),
    backgroundColor: theme.palette.primary.main,
  },
  incorrectLetther: {
    ...properties(theme),
    backgroundColor: "#CEB02C",
  },
  noLetter: {
    ...properties(theme),
    backgroundColor: "#939B9F",
  },
  containerLether: {
    display: "flex",
  },
  text: {
    fontSize: "17px",
    textAlign: "left",
    margin: "6px",
  },
}));

export { useStyles };
