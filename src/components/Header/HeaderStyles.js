/* eslint-disable no-undef */
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  key: {
    backgroundColor: theme.palette.primary.bg,
    padding: "12px 15px",
    fontSize: "18px !importan",
    textTransform: "uppercase",
    fontWeight: "800 !important",
    cursor: "pointer",
    margin: "0px 5px !important",
    borderRadius: "5px",
    "& :hover": {
      backgroundColor: "#F96F15 !important",
    },
  },

  content: {
    padding: "1vh",
    backgroundColor: theme.palette.primary.bg,
    borderRadius: "18px",
    marginTop: "2vh",
  },
}));

export { useStyles };
