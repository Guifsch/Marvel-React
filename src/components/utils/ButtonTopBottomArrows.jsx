import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  toTop: {
    zIndex: 2,
    position: "fixed!important",
    backgroundColor: "white!important",
    right: "15px",
    bottom: "170px",
    width: "50px",
    height: "50px",
  },
  toBottom: {
    zIndex: 2,
    position: "fixed!important",
    backgroundColor: "white!important",
    right: "15px",
    bottom: "105px",
    width: "50px",
    height: "50px",
  },
  buttonIcon: {
    fontSize: "3rem!important",
    backgroundColor: "black",
    color: "#f0e401",
    borderRadius: "30px",
  },
});

const ButtonTopBottomArrows = ({ showBelow, someValue }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const classes = useStyles();

  const handleScroll = () => {
    if (
      window.pageYOffset > showBelow &&
      window.matchMedia("(max-width: 768px)").matches
    ) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  if (someValue) {
    const handleClick = () => {
      window["scrollTo"]({ top: 9999999, behavior: `smooth` });
    };

    return (
      <div>
        {show && (
          <IconButton onClick={handleClick} className={classes.toBottom}>
            <ArrowDropDownIcon className={classes.buttonIcon} />
          </IconButton>
        )}
      </div>
    );
  } else {
    const handleClick = () => {
      window["scrollTo"]({ top: 0, behavior: `smooth` });
    };

    return (
      <div>
        {show && (
          <IconButton onClick={handleClick} className={classes.toTop}>
            <ArrowDropUpIcon className={classes.buttonIcon} />
          </IconButton>
        )}
      </div>
    );
  }
};
export default ButtonTopBottomArrows;
